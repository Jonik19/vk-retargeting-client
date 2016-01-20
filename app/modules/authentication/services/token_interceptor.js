/**
 * Adds 'Authorization' header per every request by passing token to the header.
 */

export default function TokenInterceptor($q, SessionService) {
  return {
    request: function (config) {
      let token = SessionService.getToken();

      if(!token) return config;

      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    }
  };
};

TokenInterceptor.$inject = ['$q', 'SessionService'];