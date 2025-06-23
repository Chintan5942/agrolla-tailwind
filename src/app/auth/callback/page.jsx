'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const params = new URLSearchParams(hash.substring(1)); // remove #
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    const expiresIn = params.get('expires_in');

    if (accessToken) {
      // Store securely in localStorage (or cookies if SSR required)
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('expires_in', expiresIn);
    }

    // Redirect to dashboard or admin panel
    router.push('/admin');
  }, []);

  return <p>Logging you in...</p>;
}
