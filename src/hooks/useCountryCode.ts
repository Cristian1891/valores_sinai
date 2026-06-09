// src/hooks/useCountryCode.ts
//
// Detecta el país del visitante por IP para mostrar las comisiones
// de MercadoPago correctas en DonationForm.
//
// Estrategia de fallback encadenada:
//   1. BigDataCloud (gratuito, sin API key, sin límite declarado)
//   2. IPinfo (gratuito con API key opcional, 50k req/mes)
//   3. Fallback a 'AR' — el 99% de donantes son de Argentina

import { useState, useEffect } from 'react';

async function fetchCountryCode(): Promise<string> {
  // Intento 1 — BigDataCloud (sin API key, sin límite)
  // Uso: geolocalización por IP para pre-seleccionar comisiones de MP
  try {
    const res = await fetch(
      'https://api.bigdatacloud.net/data/ip-geolocation-full?localityLanguage=es',
      { signal: AbortSignal.timeout(3000) }
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.country?.isoAlpha2) return data.country.isoAlpha2 as string;
    }
  } catch {
    // Continúa al siguiente intento
  }

  // Intento 2 — IPinfo (requiere API key gratuita opcional)
  try {
    const TOKEN = import.meta.env.VITE_IPINFO_TOKEN ?? '';
    const url = TOKEN
      ? `https://ipinfo.io/json?token=${TOKEN}`
      : 'https://ipinfo.io/json';
    const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const data = await res.json();
      if (data?.country) return data.country as string;
    }
  } catch {
    // Continúa al fallback
  }

  // Fallback final — Argentina por defecto
  // Justificación: la asociación es argentina y la gran mayoría
  // de donantes dona desde Argentina vía MercadoPago.
  return 'AR';
}

interface UseCountryCodeResult {
  countryCode: string | null;
  loading: boolean;
}

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