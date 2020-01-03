export default function LoginService(AuthTokenService) {
  'ngInject';

  function signIn(username, password) {
    return AuthTokenService.authToken(username, password);
  }

  return {
    signIn,
  };
}
