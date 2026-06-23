import { useEffect, useState } from "react";
import type { UseCountryCodeResult } from "../types/global";
import { fetchCountryCode } from "../utils/fetchCountryCode";

export function useCountryCode(): UseCountryCodeResult {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountryCode()
      .then(setCountryCode)
      .finally(() => setLoading(false));
  }, []);

  return { countryCode, loading };
}