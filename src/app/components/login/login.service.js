export default function LoginService(AuthTokenService) {
  'ngInject';

  function signIn(username, password) {
    return AuthTokenService.authToken(username, password).then((response) => {
      const accessToken = JSON.parse(response).result.token;
      return !!accessToken;
    });
  }

  return {
    signIn,
  };
}
