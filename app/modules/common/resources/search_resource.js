import Service from 'modules/common/services/service';

/**
 * SearchResource resource.
 */

export default class SearchResource extends Service {
  static $inject = ['$resource', 'config', 'ResponseHandler'];

  constructor() {
    super(arguments);

    this._initializeResources();
  }

  _initializeResources() {
    this.r = {};

    this.r.search = this.injections.$resource(this.injections.config.api.baseUrl + '/search', {}, {
      //check: {url: config.api.baseUrl + '/check', method: 'get', isArray: false}
    });
  }

  get(data) {
    return this.injections.ResponseHandler.handleResponse(this.r.search.get(data));
  }

}
