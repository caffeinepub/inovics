import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Lead } from '../backend';

export function useAdminLeads(enabled: boolean = true) {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<Lead[]>({
    queryKey: ['adminLeads'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getAllLeads();
    },
    enabled: !!actor && !actorFetching && enabled,
    retry: 1,
    staleTime: 10000, // Cache for 10 seconds
  });

  return {
    leads: query.data ?? [],
    isLoading: actorFetching || query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
