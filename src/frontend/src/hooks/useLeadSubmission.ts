import { useState } from 'react';
import { useActor } from './useActor';
import { useBackendHealthCheck } from './useBackendHealthCheck';

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  companyName?: string;
  industry?: string;
  revenueRange?: string;
  operationalBottleneck?: string;
  mobileNumber?: string;
}

export function useLeadSubmission() {
  const { actor, isFetching: actorFetching } = useActor();
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shouldCheckHealth, setShouldCheckHealth] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  const { status: healthStatus, checkHealth } = useBackendHealthCheck(shouldCheckHealth);

  const submitLead = async (data: LeadData) => {
    // Clear previous states
    setError(null);
    setIsSuccess(false);
    setShouldCheckHealth(false);

    // Wait for actor initialization if it's still fetching
    if (actorFetching) {
      setError('Connecting to backend, please wait...');
      return;
    }

    // If actor is not available after fetching completed
    if (!actor) {
      setError('Backend connection failed. Please click retry or refresh the page.');
      setShouldCheckHealth(true);
      return;
    }

    setIsLoading(true);

    try {
      await actor.addLead(
        data.firstName,
        data.lastName,
        data.companyName || '',
        data.industry || '',
        data.revenueRange || '',
        data.operationalBottleneck || '',
        data.email,
        data.mobileNumber || '',
        data.message
      );
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Error submitting lead:', err);
      
      // Check backend health to provide better error message
      setShouldCheckHealth(true);
      await checkHealth();
      
      if (err?.message?.includes('Unauthorized') || err?.message?.includes('trap')) {
        setError('Failed to submit your request. Please try again or contact us directly.');
      } else {
        setError('Failed to submit your request. The backend may be unreachable. Please try again or contact us directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const retry = () => {
    setError(null);
    setShouldCheckHealth(false);
    setRetryCount(prev => prev + 1);
    // Trigger a re-render which will re-evaluate actor availability
  };

  return {
    submitLead,
    isLoading,
    isSuccess,
    error,
    actorReady: !!actor && !actorFetching,
    actorInitializing: actorFetching,
    retry,
    healthStatus,
  };
}
