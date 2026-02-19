import { useState } from 'react';
import { useActor } from './useActor';

export function useAdminReset() {
  const { actor } = useActor();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const resetAdmin = async () => {
    if (!actor) {
      throw new Error('Backend connection not available. Please retry connection.');
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await actor.adminReset();
      setSuccess(true);
      return true;
    } catch (err: any) {
      console.error('Admin reset error:', err);
      
      // Parse backend error messages
      if (err.message?.includes('Unauthorized')) {
        setError('You do not have permission to reset admin initialization. Only existing admins can perform this action.');
      } else if (err.message?.includes('trap')) {
        setError('Authorization failed. Please ensure you are logged in as an admin.');
      } else {
        setError(err.message || 'Failed to reset admin initialization. Please try again.');
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);
  const clearSuccess = () => setSuccess(false);

  return {
    resetAdmin,
    isLoading,
    error,
    success,
    clearError,
    clearSuccess,
  };
}
