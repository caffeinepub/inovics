import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useBackendHealthCheck(enabled: boolean = false) {
  const { actor } = useActor();

  const query = useQuery({
    queryKey: ['backendHealthCheck'],
    queryFn: async () => {
      if (!actor) {
        return { status: 'actor-unavailable', message: 'Backend actor not initialized' };
      }
      
      try {
        const result = await actor.healthCheck();
        return { status: 'reachable', message: result };
      } catch (error: any) {
        console.error('Health check failed:', error);
        return { 
          status: 'unreachable', 
          message: error?.message || 'Backend is unreachable or misconfigured' 
        };
      }
    },
    enabled: enabled && !!actor,
    retry: 2,
    retryDelay: 1000,
    staleTime: 0, // Always fresh
  });

  return {
    status: query.data?.status || 'unknown',
    message: query.data?.message || '',
    isChecking: query.isFetching,
    checkHealth: query.refetch,
  };
}
