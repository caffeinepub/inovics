import { useState } from 'react';
import { useActor } from '../../hooks/useActor';
import { Principal } from '@dfinity/principal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UserPlus, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function AdminManagementCard() {
  const { actor } = useActor();
  const [principalInput, setPrincipalInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validatePrincipal = (input: string): boolean => {
    try {
      Principal.fromText(input);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setSuccessMessage(null);
    setErrorMessage(null);

    // Validate input
    const trimmedInput = principalInput.trim();
    if (!trimmedInput) {
      setErrorMessage('Please enter a Principal ID.');
      return;
    }

    if (!validatePrincipal(trimmedInput)) {
      setErrorMessage('Invalid Principal ID format. Please check and try again.');
      return;
    }

    if (!actor) {
      setErrorMessage('Backend connection not available. Please refresh the page and try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      const targetPrincipal = Principal.fromText(trimmedInput);
      await actor.grantAdminPrivileges(targetPrincipal);
      
      setSuccessMessage(`Admin privileges successfully granted to ${trimmedInput}`);
      setPrincipalInput('');
    } catch (error: any) {
      console.error('Grant admin error:', error);
      
      if (error.message?.includes('Unauthorized')) {
        setErrorMessage('You do not have permission to grant admin privileges. Only admins can perform this action.');
      } else if (error.message?.includes('Backend connection failed') || error.message?.includes('Actor not available')) {
        setErrorMessage('Unable to connect to the backend. Please check your connection and try again.');
      } else {
        setErrorMessage(error.message || 'Failed to grant admin privileges. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Management</CardTitle>
        <CardDescription>
          Grant admin privileges to another user by entering their Principal ID
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="principal-id">Principal ID</Label>
            <Input
              id="principal-id"
              type="text"
              placeholder="Enter Principal ID (e.g., xxxxx-xxxxx-xxxxx-xxxxx-xxx)"
              value={principalInput}
              onChange={(e) => setPrincipalInput(e.target.value)}
              disabled={isSubmitting}
              className="font-mono text-sm"
            />
          </div>

          {successMessage && (
            <Alert className="border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}

          {errorMessage && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Granting Admin Access...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Grant Admin Access
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
