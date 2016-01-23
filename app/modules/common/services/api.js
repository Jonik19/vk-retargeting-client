import Service from '../../common/services/service';

/**
 * Api service it's service which handles response from server
 * and returns comfortable response or throws an error.
 */

export default class Api extends Service {
  constructor() {
    super(arguments);
  }

  /**
   * Wrapper for get method without additional options.
   *
   * @param url
   * @returns {Promise}
   */

  get(url) {
    return this.request({
      method: 'GET',
      url: url
    });
  }

  /**
   * Wrapper for 'put' method without additional options.
   *
   * @param url
   * @param {Object|String|Number} data Data to pass to request.
   * @returns {Promise}
   */

  put(url, data) {
    return this.request({
      method: 'PUT',
      url: url,
      data: data
    });
  }

  /**
   * Wrapper for 'post' method without additional options.
   *
   * @param url
   * @param {Object|String|Number} data Data to pass to request.
   * @returns {Promise}
   */

  post(url, data) {
    return this.request({
      method: 'POST',
      url: url,
      data: data
    });
  }

  /**
   * Wrapper for 'update' method without additional options.
   *
   * @param url
   * @param {Object|String|Number} data Data to pass to request.
   * @returns {Promise}
   */

  update(url, data) {
    return this.request({
      method: 'UPDATE',
      url: url,
      data: data
    });
  }

  /**
   * Wrapper for 'delete' method without additional options.
   *
   * @param url
   * @param {Object|String|Number} data Data to pass to request.
   * @returns {Promise}
   */

  delete(url) {
    return this.request({
      method: 'DELETE',
      url: url
    });
  }

  /**
   * Wrapper for $http using baseUrl and handles comfortable response from api.
   *
   * @param options
   * @returns {*}
   */

  request(options) {
    options = options || {};

    options.method = options.method || 'GET';
    options.url = this.injections.config.baseUrl + options.url;
    options.data = options.data || {};

    return this.injections.$http(options)
      .then(function (response) {
        return response.data.response || null;
      })
      .catch(function (response) {
       throw response.data.error || {};
      });
  }
};

Api.$inject = ['$http', 'config'];