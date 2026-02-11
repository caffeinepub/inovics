import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Key, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

interface AdminTokenRestoreCardProps {
  onTokenSubmit: (token: string) => Promise<void>;
  isSubmitting: boolean;
}

export function AdminTokenRestoreCard({ onTokenSubmit, isSubmitting }: AdminTokenRestoreCardProps) {
  const [token, setToken] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token.trim()) {
      setError('Please enter a bootstrap token');
      return;
    }

    setError(null);
    setSuccess(false);

    try {
      await onTokenSubmit(token.trim());
      setSuccess(true);
      setToken(''); // Clear the input after successful submission
    } catch (err: any) {
      if (err.message?.includes('already been initialized')) {
        setError('Admin has already been initialized. This system already has an admin.');
      } else if (err.message?.includes('Invalid or expired')) {
        setError('Invalid or expired bootstrap token. Please generate a new one above.');
      } else if (err.message?.includes('Backend connection')) {
        setError('Unable to connect to the backend. Please check your connection and try again.');
      } else {
        setError(err.message || 'Failed to verify bootstrap token. Please check and try again.');
      }
      setSuccess(false);
    }
  };

  return (
    <Card className="max-w-lg mx-auto mt-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Key className="h-5 w-5 text-primary" />
          <CardTitle>Submit Bootstrap Token</CardTitle>
        </div>
        <CardDescription>
          Paste the bootstrap token you generated above to become the first admin. This is a one-time initialization process.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="adminToken">Bootstrap Token</Label>
            <Input
              id="adminToken"
              type="password"
              placeholder="Paste your bootstrap token here"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              disabled={isSubmitting}
              autoComplete="off"
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertDescription>
                Admin access granted successfully! Refreshing dashboard...
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit" disabled={isSubmitting || !token.trim()} className="w-full">
            {isSubmitting ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Initializing Admin...
              </>
            ) : (
              <>
                <Key className="mr-2 h-4 w-4" />
                Initialize as First Admin
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
