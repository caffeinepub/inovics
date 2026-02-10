import { useState } from 'react';
import { useActor } from './useActor';

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function useLeadSubmission() {
  const { actor } = useActor();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadData) => {
    if (!actor) {
      setError('Backend connection not available. Please try again.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await actor.addLead(
        data.firstName,
        data.lastName,
        data.email,
        data.message
      );
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting lead:', err);
      setError('Failed to submit your request. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitLead,
    isLoading,
    isSuccess,
    error,
  };
}
