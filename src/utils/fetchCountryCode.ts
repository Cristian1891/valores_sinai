export async function fetchCountryCode(): Promise<string> {
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

  return 'AR';
}