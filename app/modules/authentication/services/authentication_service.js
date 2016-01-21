import Service from '../../common/services/service';
import SessionService from './session_service';

/**
 * AuthenticationService is service which do remote signIn, signUp and signOut(not yet).
 * After successful remote request AuthenticationService delegates work SessionService.
 */

export default class AuthenticationService extends Service {
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

    return this.injections.Api.post('/sign-in', data)
      .then(function (response) {
        return self.injections.SessionService.createSession(response);
      });
  }

  /**
   * Checks current state of user authentication.
   * If user is authenticated sets local user and returns promise with resolved user.
   * We don't pass token in this method, that job is performed by interceptor.
   *
   * @returns {*|Promise.<T>}
   */

  check() {
    let self = this;

    return this.injections.Api.get('/check')
      .then(function (response) {
        return self.injections.SessionService.setUser(response.user);
      });
  }

  /**
   * Creates new user and authenticates his by passed data remotely and locally.
   *
   * @param {Object} data Data consists of name, username and password fields
   * @returns {*|Promise.<T>}
   */

  create(data) {
    let self = this;

    data = data || {};

    return this.injections.Api.post('/sign-up', data)
      .then(function (response) {
        return self.injections.SessionService.createSession(response);
      });
  }
};

AuthenticationService.$inject = ['$http', 'Api', 'SessionService'];