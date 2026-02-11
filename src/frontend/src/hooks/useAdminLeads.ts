import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import { useBackendHealthCheck } from './useBackendHealthCheck';
import type { Lead } from '../backend';

export function useAdminLeads(isAdmin: boolean) {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const { checkHealth } = useBackendHealthCheck();

  // Include principal in query key to prevent cross-identity cache reuse
  const principalId = identity?.getPrincipal().toString() || 'anonymous';

  const query = useQuery<Lead[]>({
    queryKey: ['adminLeads', principalId],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Backend connection failed: Actor not available');
      }

      try {
        const leads = await actor.getAllLeads();
        return leads;
      } catch (error: any) {
        console.error('Error fetching leads:', error);
        throw new Error(error.message || 'Failed to fetch leads');
      }
    },
    enabled: isAdmin && !!actor && !actorFetching,
    retry: 1,
    staleTime: 0, // Always refetch to ensure fresh data
  });

  const retryConnection = async () => {
    const healthResult = await checkHealth();
    if (healthResult.data?.status === 'reachable') {
      await query.refetch();
    }
    return healthResult;
  };

  return {
    leads: query.data || [],
    isLoading: query.isLoading,
    error: query.error as Error | null,
    refetch: query.refetch,
    retryConnection,
  };
}
