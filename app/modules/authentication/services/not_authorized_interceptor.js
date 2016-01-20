/**
 * Interceptor to catch 'un authorized' 401 error.
 * If gets 401 http response status destroys local user session and redirects to sign-in page.
 */

export default function NotAuthorizedInterceptor($q, SessionService, $injector) {
  return {
    responseError: function (response) {
      if(response.status && response.status === 401) {
        SessionService.destroySession();

        $injector.get('$state').go('auth.sign-in');
      }

      return $q.reject(response);
    }
  };
};

NotAuthorizedInterceptor.$inject = ['$q', 'SessionService', '$injector'];