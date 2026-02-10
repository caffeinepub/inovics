import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useAdminStatus(enabled: boolean = true) {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery({
    queryKey: ['adminStatus'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      const isAdmin = await actor.isCallerAdmin();
      return { isAdmin };
    },
    enabled: !!actor && !actorFetching && enabled,
    retry: 1,
    staleTime: 30000, // Cache for 30 seconds
  });

  return {
    isAdmin: query.data?.isAdmin ?? false,
    isLoading: actorFetching || query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
