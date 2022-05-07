import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';

const BASE_URL = 'https://asia-northeast3-sannumsan-server.cloudfunctions.net/api';

export default function OAuthRedirectHandler() {
  const postLogin = async (authenticationCode: string): Promise<any> => {
    const response = await axios
      .get(`${BASE_URL}/auth/kakao/callback?code=${authenticationCode}`, {
        headers: {
          Accept: `*/*`,
          'Content-Type': `application/json`,
        },
      })
      .catch((error: AxiosError) => console.error('먀', error));
    console.error(response as AxiosResponse<any, any>);
    return response as AxiosResponse<any, any>;
  };

  useEffect(() => {
    const authenticationCode = new URL(window.location.href).searchParams.get('code') ?? '';
    (async () => {
      await postLogin(authenticationCode);
    })();
  }, []);
  return <></>;
}
