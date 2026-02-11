import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import { useBackendHealthCheck } from './useBackendHealthCheck';

export function useAdminStatus(enabled: boolean = true) {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const { checkHealth } = useBackendHealthCheck();
  const queryClient = useQueryClient();

  // Include principal in query key to prevent cross-identity cache reuse
  const principalId = identity?.getPrincipal().toString() || 'anonymous';

  const query = useQuery<{ isAdmin: boolean }>({
    queryKey: ['adminStatus', principalId],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not available');
      }

      try {
        const isAdmin = await actor.isCallerAdmin();
        return { isAdmin };
      } catch (error: any) {
        // Gracefully handle authorization errors - treat as non-admin
        if (
          error.message?.includes('Unauthorized') ||
          error.message?.includes('trap') ||
          error.message?.includes('permission')
        ) {
          return { isAdmin: false };
        }
        throw error;
      }
    },
    enabled: enabled && !!actor && !actorFetching,
    retry: false,
    staleTime: 0, // Always refetch to ensure fresh admin status
  });

  const retryConnection = async () => {
    const healthResult = await checkHealth();
    if (healthResult.data?.status === 'reachable') {
      await query.refetch();
    }
    return healthResult;
  };

  return {
    isAdmin: query.data?.isAdmin || false,
    isLoading: actorFetching || query.isLoading,
    error: query.error as Error | null,
    refetch: query.refetch,
    retryConnection,
  };
}
