import { useState, useEffect } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useAdminStatus } from '../hooks/useAdminStatus';
import { useAdminLeads } from '../hooks/useAdminLeads';
import { useAdminInitializationStatus } from '../hooks/useAdminInitializationStatus';
import { useActor } from '../hooks/useActor';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { RefreshCw, ShieldAlert, LogIn, Shield, WifiOff, User, Copy, CheckCircle2, Info } from 'lucide-react';
import { AdminTokenRestoreCard } from '../components/admin/AdminTokenRestoreCard';
import { AdminManagementCard } from '../components/admin/AdminManagementCard';

export function AdminPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';
  const [isSubmittingToken, setIsSubmittingToken] = useState(false);
  const [isGeneratingToken, setIsGeneratingToken] = useState(false);
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);
  const [tokenCopied, setTokenCopied] = useState(false);
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [verificationState, setVerificationState] = useState<'idle' | 'verifying' | 'failed'>('idle');
  const [verificationAttempts, setVerificationAttempts] = useState(0);

  // Check if admin has been initialized
  const {
    isInitialized: adminInitialized,
    isLoading: initStatusLoading,
  } = useAdminInitializationStatus();

  // Only fetch admin status if authenticated
  const {
    isAdmin,
    isLoading: statusLoading,
    error: statusError,
    refetch: refetchStatus,
    retryConnection: retryStatusConnection,
  } = useAdminStatus(isAuthenticated);

  // Only fetch leads if user is admin
  const {
    leads,
    isLoading: leadsLoading,
    error: leadsError,
    refetch: refetchLeads,
    retryConnection: retryLeadsConnection,
  } = useAdminLeads(isAdmin);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      console.error('Login error:', error);
    }
  };

  const handleRefresh = () => {
    refetchStatus();
    if (isAdmin) {
      refetchLeads();
    }
  };

  const handleRetryConnection = async () => {
    await retryStatusConnection();
    if (isAdmin) {
      await retryLeadsConnection();
    }
  };

  const handleGenerateToken = async () => {
    if (!actor) {
      setTokenError('Backend connection not available. Please retry connection.');
      return;
    }

    setIsGeneratingToken(true);
    setTokenError(null);
    setGeneratedToken(null);
    setTokenCopied(false);

    try {
      const token = await actor.renewBootstrapToken();
      setGeneratedToken(token);
    } catch (error: any) {
      console.error('Token generation error:', error);
      if (error.message?.includes('already been initialized')) {
        setTokenError('Admin has already been initialized. This system already has an admin.');
      } else if (error.message?.includes('Unauthorized')) {
        setTokenError('You do not have permission to generate a bootstrap token.');
      } else {
        setTokenError(error.message || 'Failed to generate bootstrap token. Please try again.');
      }
    } finally {
      setIsGeneratingToken(false);
    }
  };

  const handleCopyToken = async () => {
    if (generatedToken) {
      try {
        await navigator.clipboard.writeText(generatedToken);
        setTokenCopied(true);
        setTimeout(() => setTokenCopied(false), 3000);
      } catch (error) {
        console.error('Failed to copy token:', error);
      }
    }
  };

  const handleTokenSubmit = async (token: string) => {
    if (!actor) {
      throw new Error('Backend connection not available. Please retry connection.');
    }

    setIsSubmittingToken(true);
    setVerificationState('idle');
    
    try {
      // Call the backend initialization method with the token
      await actor.promoteFirstAdmin(token);
      
      // Get principal for identity-scoped invalidation
      const principalId = identity?.getPrincipal().toString() || 'anonymous';
      
      // Invalidate identity-scoped queries immediately
      await queryClient.invalidateQueries({ queryKey: ['adminStatus', principalId] });
      await queryClient.invalidateQueries({ queryKey: ['adminLeads', principalId] });
      await queryClient.invalidateQueries({ queryKey: ['adminInitialized', principalId] });
      
      // Start verification process
      setVerificationState('verifying');
      setVerificationAttempts(0);
      
      // Clear generated token after successful use
      setGeneratedToken(null);
      
      // Trigger immediate refetch
      await refetchStatus();
    } catch (error: any) {
      console.error('Token submission error:', error);
      setVerificationState('idle');
      if (error.message?.includes('already been initialized')) {
        throw new Error('Admin has already been initialized. This token is no longer valid.');
      } else if (error.message?.includes('Invalid admin bootstrap token')) {
        throw new Error('Invalid or expired bootstrap token. Please generate a new one.');
      } else {
        throw new Error(error.message || 'Failed to verify admin token');
      }
    } finally {
      setIsSubmittingToken(false);
    }
  };

  // Verification polling effect
  useEffect(() => {
    if (verificationState === 'verifying' && verificationAttempts < 10) {
      const timer = setTimeout(async () => {
        const result = await refetchStatus();
        setVerificationAttempts(prev => prev + 1);
        
        if (result.data?.isAdmin) {
          // Success! Admin status confirmed
          setVerificationState('idle');
          // Fetch leads now that we're admin
          await refetchLeads();
        } else if (verificationAttempts >= 9) {
          // Failed after max attempts
          setVerificationState('failed');
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [verificationState, verificationAttempts, refetchStatus, refetchLeads]);

  const handleRetryVerification = async () => {
    setVerificationState('verifying');
    setVerificationAttempts(0);
    
    const principalId = identity?.getPrincipal().toString() || 'anonymous';
    await queryClient.invalidateQueries({ queryKey: ['adminStatus', principalId] });
    await queryClient.invalidateQueries({ queryKey: ['adminLeads', principalId] });
    await refetchStatus();
  };

  // Not logged in - show login prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Admin Access</CardTitle>
              <CardDescription>
                Sign in with Internet Identity to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                onClick={handleLogin}
                disabled={isLoggingIn}
                size="lg"
                className="w-full"
              >
                {isLoggingIn ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Get principal for display
  const principalId = identity?.getPrincipal().toString() || 'Unknown';

  // Loading admin status
  if (statusLoading || initStatusLoading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-96 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Error checking admin status or backend connection
  if (statusError) {
    const isConnectionError = statusError.message?.includes('Backend connection failed') || 
                              statusError.message?.includes('Actor not available');
    
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            {isConnectionError ? (
              <WifiOff className="h-4 w-4" />
            ) : (
              <ShieldAlert className="h-4 w-4" />
            )}
            <AlertTitle>
              {isConnectionError ? 'Connection Error' : 'Error'}
            </AlertTitle>
            <AlertDescription>
              {isConnectionError 
                ? 'Unable to connect to the backend. The backend may be unreachable or still initializing. Please try again.'
                : 'Failed to verify admin status. Please try again.'}
            </AlertDescription>
          </Alert>
          <div className="flex justify-center gap-4 mt-4">
            <Button onClick={handleRetryConnection} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry Connection
            </Button>
            <Button onClick={handleRefresh} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Not admin - show access denied with conditional bootstrap initialization option
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto border-destructive">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <ShieldAlert className="h-6 w-6 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Access Denied</CardTitle>
              <CardDescription>
                You do not have permission to access this page. Only administrators can view form submissions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                <User className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Your Principal ID:</p>
                  <p className="text-sm font-mono truncate" title={principalId}>
                    {principalId}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification failed alert */}
          {verificationState === 'failed' && (
            <Alert variant="destructive" className="max-w-lg mx-auto mt-6">
              <ShieldAlert className="h-4 w-4" />
              <AlertTitle>Admin Status Not Confirmed</AlertTitle>
              <AlertDescription className="space-y-3">
                <p>
                  The admin token was submitted successfully, but we could not confirm your admin status yet. 
                  This may be due to a temporary backend delay.
                </p>
                <Button onClick={handleRetryVerification} variant="outline" size="sm" className="w-full">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Retry Admin Status Check
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {/* Show bootstrap initialization UI only if admin has NOT been initialized */}
          {!adminInitialized ? (
            <>
              {/* Bootstrap Token Generation Card */}
              <Card className="max-w-lg mx-auto mt-6">
                <CardHeader>
                  <CardTitle>Initialize Admin Access</CardTitle>
                  <CardDescription>
                    If this is the first time setting up admin access, generate a bootstrap token below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!generatedToken ? (
                    <>
                      <Button
                        onClick={handleGenerateToken}
                        disabled={isGeneratingToken}
                        className="w-full"
                      >
                        {isGeneratingToken ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Generating Token...
                          </>
                        ) : (
                          <>
                            <Shield className="mr-2 h-4 w-4" />
                            Generate Bootstrap Token
                          </>
                        )}
                      </Button>

                      {tokenError && (
                        <Alert variant="destructive">
                          <ShieldAlert className="h-4 w-4" />
                          <AlertDescription>{tokenError}</AlertDescription>
                        </Alert>
                      )}
                    </>
                  ) : (
                    <>
                      <Alert className="border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-100">
                        <ShieldAlert className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        <AlertTitle>Important: Save This Token</AlertTitle>
                        <AlertDescription>
                          This bootstrap token will only be shown once. Copy it now and paste it in the form below to become the first admin.
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm break-all">
                            {generatedToken}
                          </div>
                          <Button
                            onClick={handleCopyToken}
                            variant="outline"
                            size="icon"
                            className="shrink-0"
                          >
                            {tokenCopied ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        {tokenCopied && (
                          <p className="text-sm text-green-600 dark:text-green-400">
                            Token copied to clipboard!
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Token Submission Card */}
              <AdminTokenRestoreCard 
                onTokenSubmit={handleTokenSubmit}
                isSubmitting={isSubmittingToken || verificationState === 'verifying'}
              />
            </>
          ) : (
            /* Admin already initialized - show informational message */
            <Alert className="max-w-lg mx-auto mt-6">
              <Info className="h-4 w-4" />
              <AlertTitle>Admin Already Initialized</AlertTitle>
              <AlertDescription>
                This system already has an admin. Bootstrap token initialization is no longer available. 
                To gain admin access, please contact an existing administrator and provide them with your Principal ID shown above. 
                They can grant you admin privileges from their admin dashboard.
              </AlertDescription>
            </Alert>
          )}

          {/* Verifying status */}
          {verificationState === 'verifying' && (
            <Alert className="max-w-lg mx-auto mt-6">
              <RefreshCw className="h-4 w-4 animate-spin" />
              <AlertTitle>Verifying Admin Status</AlertTitle>
              <AlertDescription>
                Please wait while we confirm your admin privileges...
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    );
  }

  // Admin view - show submissions and admin management
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              View and manage all form submissions
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <User className="h-3 w-3" />
              <span className="font-mono">{principalId}</span>
            </div>
          </div>
          <Button onClick={handleRefresh} variant="outline" disabled={leadsLoading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${leadsLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Admin Management Section */}
        <div className="mb-8">
          <AdminManagementCard />
        </div>

        {leadsError && (
          <Alert variant="destructive" className="mb-6">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Error Loading Submissions</AlertTitle>
            <AlertDescription className="flex items-center justify-between">
              <span>
                {leadsError.message?.includes('Backend connection failed')
                  ? 'Unable to connect to the backend. Please retry the connection.'
                  : 'Failed to load form submissions. Please try refreshing the page.'}
              </span>
              {leadsError.message?.includes('Backend connection failed') && (
                <Button onClick={handleRetryConnection} variant="outline" size="sm" className="ml-4">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Retry
                </Button>
              )}
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Form Submissions</CardTitle>
            <CardDescription>
              {leads.length === 0 
                ? 'No submissions yet' 
                : `${leads.length} submission${leads.length === 1 ? '' : 's'}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {leadsLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : leads.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>No form submissions yet.</p>
                <p className="text-sm mt-2">Submissions will appear here once users fill out forms on your site.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Revenue Range</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>Bottleneck</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {lead.firstName} {lead.lastName}
                        </TableCell>
                        <TableCell>{lead.companyName}</TableCell>
                        <TableCell>{lead.industry}</TableCell>
                        <TableCell>{lead.revenueRange}</TableCell>
                        <TableCell>{lead.email}</TableCell>
                        <TableCell>{lead.mobileNumber}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {lead.operationalBottleneck}
                        </TableCell>
                        <TableCell className="max-w-xs truncate">
                          {lead.message}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
