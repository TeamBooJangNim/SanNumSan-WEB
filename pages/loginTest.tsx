const DOMAIN = 'http://localhost:3000';
const CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;
const REDIRECT_URI = `${DOMAIN}/auth/kakao/callback`;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function LoginTest() {
  return <button onClick={() => (window.location.href = KAKAO_AUTH_URL)}>카카오톡 로그인 테스트</button>;
}
