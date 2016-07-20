import Service from 'modules/common/services/service';

/**
 * Common controller for extending.
 */

export default class ResponseHandler extends Service {
  static $inject = ['$q'];

  constructor(args) {
    super(args);
  }

  handleResponse(response) {
    return response.$promise
      .then(function (response) {
        debugger
        if(response && response.response) {
          return response.response;
        }

        return response;
      })
      .catch(function (response) {
        if(response && response.data && response.data.error) {
          return response.data.error;
        }

        return response;
      });
  }
}