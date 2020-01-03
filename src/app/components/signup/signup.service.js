export default function SignUpService(AuthTokenService) {
  'ngInject';

  function signUp(username, password) {
    return AuthTokenService.authToken(username, password);
  }

  return {
    signUp,
  };
}
