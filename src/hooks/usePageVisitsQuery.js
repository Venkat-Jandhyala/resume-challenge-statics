import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react"
import { updatePageVisits } from "../services/updatePageVisits";
import isEmpty from "lodash/isEmpty";

export const usePageVisitsQuery = () => {
  const [query, setQuery] = useState({});

  const pageVisits = useQuery({
    queryKey: ['pageVisits', Date.now()],
    queryFn: () => updatePageVisits(),
    enabled: isEmpty(query),
    cacheTime: Infinity,
  });

  const updateVisitCount = useCallback(() => {
    setQuery({
      now: Date.now()
    })
  }, [setQuery]);

  return {
    ...pageVisits,
    updateVisitCount,
  }

}