import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';

const BASE_URL = 'https://asia-northeast3-sannumsan-server.cloudfunctions.net/api';

export default function OAuthRedirectHandler() {
  useEffect(() => {
    const authenticationCode = new URL(window.location.href).searchParams.get('code') ?? '';
    (async () => {
      await axios
        .get(`${BASE_URL}/auth/kakao/callback?code=${authenticationCode}`)
        .catch((error: AxiosError) => console.log('먀', error));
    })();
  }, []);
  return <></>;
}
