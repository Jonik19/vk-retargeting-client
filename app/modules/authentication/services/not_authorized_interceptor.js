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
    responseError: function (error) {
      return $q.reject(error);
    }
  };
};

interceptor.$inject = ['$q'];