import Service from '../../common/services/service';
import SessionService from './session_service';

/**
 * AuthenticationService is service which do remote signIn, signUp and signOut(not yet).
 * After successful remote request AuthenticationService delegates work SessionService.
 */

export default class AuthenticationService extends Service {
  static $inject = ['$q', 'ApiResource', 'SessionService'];

  constructor() {
    super(arguments);
  }

  /**
   * Authenticates user by passed data remotely and locally.
   *
   * @param {Object} data Data consists of username and password fields
   * @returns {*|Promise.<T>}
   */

  authenticate(data) {
    let self = this;

    data = data || {};

    return this.injections.ApiResource.signIn(data).$promise
      .then(function (data) {
        return self.injections.SessionService.createSession(data.response);
      });
  }

  /**
   * Checks current state of user authentication.
   * If user is authenticated sets local user and new token.
   * We don't pass token in this method, that job is performed by interceptor.
   *
   * @returns {*|Promise.<T>}
   */

  check() {
    let self = this;

    return this.injections.ApiResource.check().$promise
      .then(function (data) {
        return self.injections.SessionService.createSession(data.response);
      });
  }

  /**returns promise with resolved user
   * Creates new user and authenticates his by passed data remotely and locally.
   *
   * @param {Object} data Data consists of name, username and password fields
   * @returns {*|Promise.<T>}
   */

  create(data) {
    let self = this;

    data = data || {};

    return this.injections.ApiResource.signUp(data).$promise
      .then(function (data) {
        return self.injections.SessionService.createSession(data.response);
      });
  }

  /**
   * Signs out user remotely(not yet) and locally.
   *
   * @returns {*|Promise.<T>}
   */

  signOut() {
    let self = this;

    return self.injections.$q(function (resolve, reject) {
      resolve(self.injections.SessionService.destroySession());
    });
  }
};