import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useActor } from "./useActor";

export function useAdminSystemReset() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetSystem = async () => {
    if (!actor) {
      throw new Error(
        "Backend connection not available. Please retry connection.",
      );
    }

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await actor.resetAdminSystem();

      // Invalidate all admin-related queries
      await queryClient.invalidateQueries({ queryKey: ["adminInitialized"] });
      await queryClient.invalidateQueries({ queryKey: ["isAdmin"] });

      setIsSuccess(true);
      return true;
    } catch (err: any) {
      console.error("Admin system reset error:", err);

      // Parse backend error messages
      if (err.message?.includes("trap")) {
        setError("Failed to reset admin system. Please try again.");
      } else {
        setError(
          err.message || "Failed to reset admin system. Please try again.",
        );
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setIsSuccess(false);
  };

  return {
    resetSystem,
    isLoading,
    isSuccess,
    error,
    reset,
  };
}
