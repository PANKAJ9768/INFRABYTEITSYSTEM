import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
          const token = process.env.REACT_APP_CLOUDFLARE_ANALYTICS_TOKEN;
    // Create script element
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', JSON.stringify({token}));

    // Add script to document head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://static.cloudflareinsights.com/beacon.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
