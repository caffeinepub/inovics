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
import {
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";
import { useState } from "react";
import { useAdminSystemReset } from "../../hooks/useAdminSystemReset";

const CONFIRMATION_TEXT = "RESET ADMIN";

export function AdminSystemResetCard() {
  const [confirmationInput, setConfirmationInput] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { resetSystem, isLoading, error, isSuccess } = useAdminSystemReset();

  const handleInitiateReset = () => {
    setShowConfirmation(true);
  };

  const handleConfirmReset = async () => {
    if (confirmationInput !== CONFIRMATION_TEXT) {
      return;
    }

    await resetSystem();
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setConfirmationInput("");
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
            <CardTitle className="text-xl">Reset Admin System</CardTitle>
            <CardDescription>
              Clear all admin access and start fresh
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showConfirmation ? (
          <>
            <Alert>
              <ShieldAlert className="h-4 w-4" />
              <AlertTitle>Need to Reset Admin Access?</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p>
                  If you're locked out or need to reclaim admin access, you can
                  reset the entire admin system.
                </p>
                <p className="font-medium">
                  After reset, you'll be able to generate a new bootstrap token
                  and become the first admin.
                </p>
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning: This Action Cannot Be Undone</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p>Resetting the admin system will:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Remove all existing admin privileges</li>
                  <li>Clear the current bootstrap token</li>
                  <li>Reset the admin initialization flag</li>
                  <li>
                    Allow the next authenticated user to claim admin access
                  </li>
                </ul>
                <p className="font-medium mt-3">
                  Only use this if you need to recover from lost admin access.
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
                Reset Admin System
              </Button>
            </div>
          </>
        ) : (
          <>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Confirm Admin System Reset</AlertTitle>
              <AlertDescription>
                This action will remove all existing admin access. Type{" "}
                <strong>{CONFIRMATION_TEXT}</strong> below to confirm.
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

            {isSuccess && (
              <Alert className="border-success bg-success/10">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <AlertTitle>Reset Successful</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p>The admin system has been reset successfully.</p>
                  <p className="font-medium">Next steps:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>Refresh this page</li>
                    <li>Generate a new bootstrap token</li>
                    <li>Submit the token to become the first admin</li>
                  </ol>
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-end gap-3">
              <Button
                onClick={handleCancel}
                variant="outline"
                disabled={isLoading || isSuccess}
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmReset}
                variant="destructive"
                disabled={!isConfirmationValid || isLoading || isSuccess}
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
