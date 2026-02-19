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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCw, ShieldAlert, LogIn, Shield, WifiOff, User, Copy, CheckCircle2, Info, LogOut } from 'lucide-react';
import { AdminTokenRestoreCard } from '../components/admin/AdminTokenRestoreCard';
import { AdminManagementCard } from '../components/admin/AdminManagementCard';
import { AdminResetRecoveryCard } from '../components/admin/AdminResetRecoveryCard';

export function AdminPage() {
  const { identity, login, loginStatus, clear } = useInternetIdentity();
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';
  
  // Credential login state
  const [credentialMode, setCredentialMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCredentialLoading, setIsCredentialLoading] = useState(false);
  const [credentialError, setCredentialError] = useState<string | null>(null);
  const [isCredentialAuthenticated, setIsCredentialAuthenticated] = useState(false);
  
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
    refetch: refetchInitStatus,
  } = useAdminInitializationStatus();

  // Only fetch admin status if authenticated (either II or credential)
  const {
    isAdmin,
    isLoading: statusLoading,
    error: statusError,
    refetch: refetchStatus,
    retryConnection: retryStatusConnection,
  } = useAdminStatus(isAuthenticated || isCredentialAuthenticated);

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

  const handleCredentialLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!actor) {
      setCredentialError('Backend connection not available. Please retry connection.');
      return;
    }

    setIsCredentialLoading(true);
    setCredentialError(null);

    try {
      const result = await actor.authenticateAdminCredentials(username, password);
      
      if (result.success) {
        setIsCredentialAuthenticated(true);
        // Invalidate queries to fetch fresh admin status
        await queryClient.invalidateQueries({ queryKey: ['adminStatus'] });
        await queryClient.invalidateQueries({ queryKey: ['adminLeads'] });
        // Trigger refetch
        await refetchStatus();
      } else {
        setCredentialError(result.message || 'Invalid credentials');
      }
    } catch (error: any) {
      console.error('Credential login error:', error);
      setCredentialError(error.message || 'Failed to authenticate. Please try again.');
    } finally {
      setIsCredentialLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (isAuthenticated) {
      // Internet Identity sign out
      const principalId = identity?.getPrincipal().toString() || 'anonymous';
      
      // Clear Internet Identity session
      await clear();
      
      // Invalidate admin-scoped queries
      await queryClient.invalidateQueries({ queryKey: ['adminStatus', principalId] });
      await queryClient.invalidateQueries({ queryKey: ['adminLeads', principalId] });
      await queryClient.invalidateQueries({ queryKey: ['adminInitialized', principalId] });
    } else if (isCredentialAuthenticated) {
      // Credential sign out
      // Clear credential state
      setIsCredentialAuthenticated(false);
      setUsername('');
      setPassword('');
      setCredentialError(null);
      setCredentialMode(false);
      
      // Invalidate admin-scoped queries for credential user
      await queryClient.invalidateQueries({ queryKey: ['adminStatus', 'credential-user'] });
      await queryClient.invalidateQueries({ queryKey: ['adminLeads', 'credential-user'] });
      await queryClient.invalidateQueries({ queryKey: ['adminInitialized', 'credential-user'] });
    }
  };

  const handleRefresh = () => {
    refetchStatus();
    refetchInitStatus();
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

  const handleResetSuccess = async () => {
    // Clear all state
    setGeneratedToken(null);
    setTokenError(null);
    setTokenCopied(false);
    setVerificationState('idle');
    setVerificationAttempts(0);
    
    // Get principal for identity-scoped invalidation
    const principalId = identity?.getPrincipal().toString() || 'credential-user';
    
    // Invalidate all admin-related queries
    await queryClient.invalidateQueries({ queryKey: ['adminStatus', principalId] });
    await queryClient.invalidateQueries({ queryKey: ['adminLeads', principalId] });
    await queryClient.invalidateQueries({ queryKey: ['adminInitialized', principalId] });
    
    // Refetch initialization status to show bootstrap UI
    await refetchInitStatus();
    await refetchStatus();
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

  // Not logged in - show login options (Internet Identity or Credentials)
  if (!isAuthenticated && !isCredentialAuthenticated) {
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
                {credentialMode 
                  ? 'Sign in with your admin credentials'
                  : 'Choose your sign-in method'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!credentialMode ? (
                <>
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
                        Sign In with Internet Identity
                      </>
                    )}
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setCredentialMode(true)}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Sign In with Credentials
                  </Button>
                </>
              ) : (
                <form onSubmit={handleCredentialLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="email"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={isCredentialLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isCredentialLoading}
                    />
                  </div>

                  {credentialError && (
                    <Alert variant="destructive">
                      <ShieldAlert className="h-4 w-4" />
                      <AlertDescription>{credentialError}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={isCredentialLoading}
                    size="lg"
                    className="w-full"
                  >
                    {isCredentialLoading ? (
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

                  <Button
                    type="button"
                    onClick={() => {
                      setCredentialMode(false);
                      setCredentialError(null);
                      setUsername('');
                      setPassword('');
                    }}
                    variant="ghost"
                    size="sm"
                    className="w-full"
                  >
                    Back to sign-in options
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Get principal for display
  const principalId = identity?.getPrincipal().toString() || 'Credential User';

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

  // Not admin - show access denied with conditional bootstrap initialization or reset option
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
              {!isCredentialAuthenticated && (
                <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Your Principal ID</p>
                    <p className="text-sm font-mono break-all">{principalId}</p>
                  </div>
                </div>
              )}

              {adminInitialized ? (
                <AdminResetRecoveryCard onResetSuccess={handleResetSuccess} />
              ) : (
                <>
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Admin Setup Required</AlertTitle>
                    <AlertDescription>
                      No admin has been configured yet. Use the bootstrap token to become the first administrator.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Button
                        onClick={handleGenerateToken}
                        disabled={isGeneratingToken || !!generatedToken}
                        className="w-full"
                        variant="outline"
                      >
                        {isGeneratingToken ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Generating Token...
                          </>
                        ) : generatedToken ? (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Token Generated
                          </>
                        ) : (
                          'Generate Bootstrap Token'
                        )}
                      </Button>

                      {tokenError && (
                        <Alert variant="destructive">
                          <ShieldAlert className="h-4 w-4" />
                          <AlertDescription>{tokenError}</AlertDescription>
                        </Alert>
                      )}

                      {generatedToken && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Input
                              value={generatedToken}
                              readOnly
                              className="font-mono text-sm"
                            />
                            <Button
                              onClick={handleCopyToken}
                              variant="outline"
                              size="icon"
                            >
                              {tokenCopied ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Copy this token and use it below to initialize admin access.
                          </p>
                        </div>
                      )}
                    </div>

                    <AdminTokenRestoreCard
                      onTokenSubmit={handleTokenSubmit}
                      isSubmitting={isSubmittingToken}
                    />
                  </div>
                </>
              )}

              <Button
                onClick={handleSignOut}
                variant="ghost"
                className="w-full"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Admin view - show dashboard with leads
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Manage form submissions and admin access
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleRefresh} variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button onClick={handleSignOut} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>

        {!isCredentialAuthenticated && (
          <div className="mb-6">
            <Alert>
              <User className="h-4 w-4" />
              <AlertTitle>Signed in as</AlertTitle>
              <AlertDescription className="font-mono text-xs break-all">
                {principalId}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="grid gap-6 mb-8">
          <AdminManagementCard />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Form Submissions</CardTitle>
            <CardDescription>
              All lead submissions from your website forms
            </CardDescription>
          </CardHeader>
          <CardContent>
            {leadsLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : leadsError ? (
              <Alert variant="destructive">
                <ShieldAlert className="h-4 w-4" />
                <AlertTitle>Error Loading Leads</AlertTitle>
                <AlertDescription>
                  {leadsError.message || 'Failed to load form submissions. Please try again.'}
                </AlertDescription>
              </Alert>
            ) : leads.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No form submissions yet</p>
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
