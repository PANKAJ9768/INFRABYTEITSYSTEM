import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Use import.meta.env for Vite instead of process.env
    const token = import.meta.env.VITE_CLOUDFLARE_ANALYTICS_TOKEN;

    if (!token) {
      console.warn('Cloudflare Analytics token not found');
      return;
    }

    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', JSON.stringify({ token }));
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://static.cloudflareinsights.com/beacon.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default Analytics;
