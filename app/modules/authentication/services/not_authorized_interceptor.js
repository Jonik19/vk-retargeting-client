export default function interceptor($q) {
  return {
    request: function (config) {
      return config;
    },
    requestError: function (error) {
      return error;
    },
    response: function (response) {
      return response;
    },
    responseError: function (response) {
      if(response.status && response.status === 401) {
      //  Do sign out
      }

      return $q.reject(response);
    }
  };
};

interceptor.$inject = ['$q'];