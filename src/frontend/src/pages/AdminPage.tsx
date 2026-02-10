import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useAdminStatus } from '../hooks/useAdminStatus';
import { useAdminLeads } from '../hooks/useAdminLeads';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { RefreshCw, ShieldAlert, LogIn, Shield } from 'lucide-react';

export function AdminPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  // Only fetch admin status if authenticated
  const {
    isAdmin,
    isLoading: statusLoading,
    error: statusError,
    refetch: refetchStatus,
  } = useAdminStatus(isAuthenticated);

  // Only fetch leads if user is admin
  const {
    leads,
    isLoading: leadsLoading,
    error: leadsError,
    refetch: refetchLeads,
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

  // Loading admin status
  if (statusLoading) {
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

  // Error checking admin status
  if (statusError) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to verify admin status. Please try again.
            </AlertDescription>
          </Alert>
          <div className="flex justify-center mt-4">
            <Button onClick={handleRefresh} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Not admin - show access denied
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
          </Card>
        </div>
      </div>
    );
  }

  // Admin view - show submissions
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              View and manage all form submissions
            </p>
          </div>
          <Button onClick={handleRefresh} variant="outline" disabled={leadsLoading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${leadsLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {leadsError && (
          <Alert variant="destructive" className="mb-6">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Error Loading Submissions</AlertTitle>
            <AlertDescription>
              Failed to load form submissions. Please try refreshing the page.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Form Submissions</CardTitle>
            <CardDescription>
              {leads.length === 0
                ? 'No submissions yet'
                : `${leads.length} submission${leads.length === 1 ? '' : 's'} total`}
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
                <p>No form submissions have been received yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Name</TableHead>
                      <TableHead className="w-[200px]">Email</TableHead>
                      <TableHead className="w-[150px]">Mobile</TableHead>
                      <TableHead className="w-[150px]">Company</TableHead>
                      <TableHead className="w-[120px]">Industry</TableHead>
                      <TableHead className="w-[150px]">Revenue Range</TableHead>
                      <TableHead className="w-[200px]">Operational Bottleneck</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {lead.firstName} {lead.lastName}
                        </TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-primary hover:underline"
                          >
                            {lead.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          {lead.mobileNumber || '-'}
                        </TableCell>
                        <TableCell>{lead.companyName || '-'}</TableCell>
                        <TableCell>{lead.industry || '-'}</TableCell>
                        <TableCell>{lead.revenueRange || '-'}</TableCell>
                        <TableCell className="max-w-[200px]">
                          <div className="truncate" title={lead.operationalBottleneck}>
                            {lead.operationalBottleneck || '-'}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[300px]">
                          <div className="truncate" title={lead.message}>
                            {lead.message || '-'}
                          </div>
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
