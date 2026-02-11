import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';

export function useAdminInitializationStatus() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  
  // Use principal in query key to scope by identity
  const principalId = identity?.getPrincipal().toString() || 'anonymous';

  const query = useQuery<boolean>({
    queryKey: ['adminInitialized', principalId],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.isAdminInitialized();
    },
    enabled: !!actor && !actorFetching,
    staleTime: 0, // Always fetch fresh data
    retry: 1,
  });

  return {
    ...query,
    isInitialized: query.data ?? false,
    isLoading: actorFetching || query.isLoading,
  };
}
