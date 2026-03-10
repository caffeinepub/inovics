import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQueryClient } from "@tanstack/react-query";
import {
  CheckCircle2,
  Copy,
  Info,
  LogIn,
  LogOut,
  RefreshCw,
  Shield,
  ShieldAlert,
  User,
  WifiOff,
} from "lucide-react";
import { useState } from "react";
import { AdminManagementCard } from "../components/admin/AdminManagementCard";
import { AdminResetRecoveryCard } from "../components/admin/AdminResetRecoveryCard";
import { AdminSystemResetCard } from "../components/admin/AdminSystemResetCard";
import { AdminTokenRestoreCard } from "../components/admin/AdminTokenRestoreCard";
import { useActor } from "../hooks/useActor";
import { useAdminInitializationStatus } from "../hooks/useAdminInitializationStatus";
import { useAdminLeads } from "../hooks/useAdminLeads";
import { useAdminStatus } from "../hooks/useAdminStatus";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

// Suppress unused import warning - used in JSX via component reference
void AdminResetRecoveryCard;

export function AdminPage() {
  const { identity, login, loginStatus, clear } = useInternetIdentity();
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === "logging-in";

  const [credentialMode, setCredentialMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCredentialLoading, setIsCredentialLoading] = useState(false);
  const [credentialError, setCredentialError] = useState<string | null>(null);
  const [isCredentialAuthenticated, setIsCredentialAuthenticated] =
    useState(false);

  const [isSubmittingToken, setIsSubmittingToken] = useState(false);
  const [isGeneratingToken, setIsGeneratingToken] = useState(false);
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);
  const [tokenCopied, setTokenCopied] = useState(false);
  const [tokenError, setTokenError] = useState<string | null>(null);

  const {
    isInitialized: adminInitialized,
    isLoading: initStatusLoading,
    refetch: refetchInitStatus,
  } = useAdminInitializationStatus();

  const {
    isAdmin,
    isLoading: statusLoading,
    error: statusError,
    refetch: refetchStatus,
    retryConnection: retryStatusConnection,
  } = useAdminStatus(isAuthenticated || isCredentialAuthenticated);

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
    } catch (error: unknown) {
      console.error("Login error:", error);
    }
  };

  const handleCredentialLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setCredentialError(
        "Backend connection not available. Please retry connection.",
      );
      return;
    }
    setIsCredentialLoading(true);
    setCredentialError(null);
    try {
      const result = await actor.authenticateAdminCredentials(
        username,
        password,
      );
      if (result.success) {
        setIsCredentialAuthenticated(true);
        await queryClient.invalidateQueries({ queryKey: ["adminStatus"] });
        await queryClient.invalidateQueries({ queryKey: ["adminLeads"] });
        await refetchStatus();
      } else {
        setCredentialError(result.message || "Invalid credentials");
      }
    } catch (error: unknown) {
      console.error("Credential login error:", error);
      setCredentialError(
        error instanceof Error
          ? error.message
          : "Failed to authenticate. Please try again.",
      );
    } finally {
      setIsCredentialLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (isAuthenticated) {
      const principalId = identity?.getPrincipal().toString() || "anonymous";
      await clear();
      await queryClient.invalidateQueries({
        queryKey: ["adminStatus", principalId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["adminLeads", principalId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["adminInitialized", principalId],
      });
    } else if (isCredentialAuthenticated) {
      setIsCredentialAuthenticated(false);
      setUsername("");
      setPassword("");
      setCredentialError(null);
      setCredentialMode(false);
      await queryClient.invalidateQueries({
        queryKey: ["adminStatus", "credential-user"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["adminLeads", "credential-user"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["adminInitialized", "credential-user"],
      });
    }
  };

  const handleRefresh = () => {
    refetchStatus();
    refetchInitStatus();
    if (isAdmin) refetchLeads();
  };

  const handleRetryConnection = async () => {
    await retryStatusConnection();
    if (isAdmin) await retryLeadsConnection();
  };

  const handleGenerateToken = async () => {
    if (!actor) {
      setTokenError(
        "Backend connection not available. Please retry connection.",
      );
      return;
    }
    setIsGeneratingToken(true);
    setTokenError(null);
    setGeneratedToken(null);
    setTokenCopied(false);
    try {
      const token = await actor.renewBootstrapToken();
      setGeneratedToken(token);
    } catch (error: unknown) {
      console.error("Token generation error:", error);
      const msg = error instanceof Error ? error.message : "";
      if (msg.includes("already been initialized")) {
        setTokenError(
          "Admin has already been initialized. This system already has an admin.",
        );
      } else if (msg.includes("Unauthorized")) {
        setTokenError(
          "You do not have permission to generate a bootstrap token.",
        );
      } else {
        setTokenError(
          msg || "Failed to generate bootstrap token. Please try again.",
        );
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
        console.error("Failed to copy token:", error);
      }
    }
  };

  const handleTokenSubmit = async (token: string) => {
    if (!actor)
      throw new Error(
        "Backend connection not available. Please retry connection.",
      );
    setIsSubmittingToken(true);
    try {
      await actor.promoteFirstAdmin(token);
      const principalId = identity?.getPrincipal().toString() || "anonymous";
      await queryClient.invalidateQueries({
        queryKey: ["adminStatus", principalId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["adminLeads", principalId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["adminInitialized", principalId],
      });
      setGeneratedToken(null);
      await refetchStatus();
      await refetchLeads();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "";
      if (msg.includes("already been initialized"))
        throw new Error(
          "Admin has already been initialized. This token is no longer valid.",
        );
      if (msg.includes("Invalid admin bootstrap token"))
        throw new Error(
          "Invalid or expired bootstrap token. Please generate a new one.",
        );
      throw new Error(msg || "Failed to verify admin token");
    } finally {
      setIsSubmittingToken(false);
    }
  };

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
                  ? "Sign in with your admin credentials"
                  : "Choose your sign-in method"}
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
                      setUsername("");
                      setPassword("");
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

  const principalId = identity?.getPrincipal().toString() || "Credential User";

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

  if (statusError) {
    const isConnectionError =
      statusError.message?.includes("Backend connection failed") ||
      statusError.message?.includes("Actor not available");
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
              {isConnectionError ? "Connection Error" : "Error"}
            </AlertTitle>
            <AlertDescription>
              {isConnectionError
                ? "Unable to connect to the backend. Please try again."
                : "Failed to verify admin status. Please try again."}
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

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">
                  Admin Access Required
                </CardTitle>
                <CardDescription>
                  You are signed in as:{" "}
                  <span className="font-mono text-xs block mt-1">
                    {principalId}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Not an Admin</AlertTitle>
                  <AlertDescription>
                    Your account does not have admin privileges.
                  </AlertDescription>
                </Alert>
                <div className="flex justify-center">
                  <Button onClick={handleSignOut} variant="outline">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
            {!adminInitialized && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>First Admin Setup</CardTitle>
                    <CardDescription>
                      No admin has been set up yet.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!generatedToken ? (
                      <>
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            Click below to generate a one-time bootstrap token.
                          </AlertDescription>
                        </Alert>
                        {tokenError && (
                          <Alert variant="destructive">
                            <ShieldAlert className="h-4 w-4" />
                            <AlertDescription>{tokenError}</AlertDescription>
                          </Alert>
                        )}
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
                            "Generate Bootstrap Token"
                          )}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Alert className="border-success bg-success/10">
                          <CheckCircle2 className="h-4 w-4 text-success" />
                          <AlertTitle>Token Generated</AlertTitle>
                          <AlertDescription>
                            Copy this token and submit it below.
                          </AlertDescription>
                        </Alert>
                        <div className="space-y-2">
                          <Label>Bootstrap Token</Label>
                          <div className="flex gap-2">
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
                                <CheckCircle2 className="h-4 w-4 text-success" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
                {generatedToken && (
                  <AdminTokenRestoreCard
                    onTokenSubmit={handleTokenSubmit}
                    isSubmitting={isSubmittingToken}
                  />
                )}
              </>
            )}
            <AdminSystemResetCard />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Admin Dashboard
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Signed in as:{" "}
                    <span className="font-mono text-xs">{principalId}</span>
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleRefresh} variant="outline" size="sm">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh
                  </Button>
                  <Button onClick={handleSignOut} variant="outline" size="sm">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Alert className="border-success bg-success/10">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <AlertTitle>Admin Access Confirmed</AlertTitle>
                <AlertDescription>
                  You have full admin privileges.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          <AdminSystemResetCard />
          <AdminManagementCard />
          <Card>
            <CardHeader>
              <CardTitle>Lead Submissions</CardTitle>
              <CardDescription>
                All leads submitted through the website forms
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
                <>
                  <Alert variant="destructive">
                    <ShieldAlert className="h-4 w-4" />
                    <AlertTitle>Error Loading Leads</AlertTitle>
                    <AlertDescription>
                      {leadsError.message || "Failed to load leads."}
                    </AlertDescription>
                  </Alert>
                  <div className="flex justify-center mt-4">
                    <Button onClick={() => refetchLeads()} variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Retry
                    </Button>
                  </div>
                </>
              ) : leads && leads.length > 0 ? (
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
                      {leads.map((lead) => (
                        <TableRow key={`${lead.email}-${lead.companyName}`}>
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
              ) : (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    No leads have been submitted yet.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
