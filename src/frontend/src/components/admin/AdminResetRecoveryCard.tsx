import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertTriangle, RefreshCw, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useAdminReset } from '../../hooks/useAdminReset';

const CONFIRMATION_TEXT = 'RESET ADMIN';

export function AdminResetRecoveryCard({ onResetSuccess }: { onResetSuccess: () => void }) {
  const [confirmationInput, setConfirmationInput] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { resetAdmin, isLoading, error, success } = useAdminReset();

  const handleInitiateReset = () => {
    setShowConfirmation(true);
  };

  const handleConfirmReset = async () => {
    if (confirmationInput !== CONFIRMATION_TEXT) {
      return;
    }

    const result = await resetAdmin();
    if (result) {
      // Wait a moment for user to see success message
      setTimeout(() => {
        onResetSuccess();
      }, 1500);
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setConfirmationInput('');
  };

  const isConfirmationValid = confirmationInput === CONFIRMATION_TEXT;

  return (
    <Card className="max-w-2xl mx-auto mt-6 border-warning">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/10">
            <AlertTriangle className="h-5 w-5 text-warning" />
          </div>
          <div>
            <CardTitle className="text-xl">Admin Recovery</CardTitle>
            <CardDescription>
              Reset admin initialization to regain access
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showConfirmation ? (
          <>
            <Alert>
              <ShieldAlert className="h-4 w-4" />
              <AlertTitle>Admin Already Initialized</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p>
                  This system already has an admin. If you are locked out and need to regain access, 
                  you can reset the admin initialization state.
                </p>
                <p className="font-medium">
                  This will allow you to set up a new admin using a bootstrap token.
                </p>
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning: This Action Cannot Be Undone</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p>
                  Resetting admin initialization will:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Remove all existing admin privileges</li>
                  <li>Clear the current bootstrap token</li>
                  <li>Require generating a new bootstrap token to set up admin access</li>
                </ul>
                <p className="font-medium mt-3">
                  Only use this option if you are locked out and need to recover access to the admin panel.
                </p>
              </AlertDescription>
            </Alert>

            <div className="flex justify-end">
              <Button
                onClick={handleInitiateReset}
                variant="destructive"
                disabled={isLoading}
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Reset Admin Initialization
              </Button>
            </div>
          </>
        ) : (
          <>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Confirm Admin Reset</AlertTitle>
              <AlertDescription>
                This action will remove all existing admin access. Type <strong>{CONFIRMATION_TEXT}</strong> below to confirm.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label htmlFor="confirmation">
                Type "{CONFIRMATION_TEXT}" to confirm
              </Label>
              <Input
                id="confirmation"
                type="text"
                value={confirmationInput}
                onChange={(e) => setConfirmationInput(e.target.value)}
                placeholder={CONFIRMATION_TEXT}
                disabled={isLoading}
                className="font-mono"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <ShieldAlert className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-success bg-success/10">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <AlertTitle>Reset Successful</AlertTitle>
                <AlertDescription>
                  Admin initialization has been reset. You can now generate a new bootstrap token to set up admin access.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-end gap-3">
              <Button
                onClick={handleCancel}
                variant="outline"
                disabled={isLoading || success}
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmReset}
                variant="destructive"
                disabled={!isConfirmationValid || isLoading || success}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Resetting...
                  </>
                ) : (
                  <>
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Confirm Reset
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
