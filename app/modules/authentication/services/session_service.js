import Service from '../../common/services/service';

/**
 * SessionService is service to do local user authentication.
 */

export default class SessionService extends Service {
  constructor() {
    super(arguments);

    this.user = null;
    this.token= null;
  }

  /**
   * Fills local user and token, also writes token to localStorage.
   *
   * @param {Object} response Object consists of user and token fields
   * @returns {*}
   */

  createSession(response) {
    this.setUser(response.user);
    this.setTokenToStorage(response.token);
    this.setToken(response.token);

    return this.getUser();
  }

  /**
   * Sets local user
   *
   * @param {Object} user
   * @returns {*}
   */

  setUser(user) {
    return this.user = user;
  }

  /**
   * Returns new user object. It DOESN'T return same object so you can change it
   * and your changes will not affect to original user object.
   */

  getUser() {
    return JSON.parse(JSON.stringify(this.user));
  }

  /**
   * Returns token. If local token doesn't exist writes it from localStorage
   * to local variable and then returns.
   * @returns {null|*}
   */

  getToken() {
    if(this.token === null) {
      this.setToken(this.getTokenFromStorage());
    }

    return this.token;
  }

  /**
   * Sets token to local variables.
   * @param {String} token
   * @returns {*}
   */

  setToken(token) {
    return this.token = token;
  }

  /**
   * Sets token to localStorage.
   * @param {String} token
   */

  setTokenToStorage(token) {
    return localStorage.setItem(this.tokenName, token);
  }

  /**
   * Returns token from localStorage.
   */

  getTokenFromStorage() {
    return localStorage.getItem(this.tokenName);
  }

  /**
   * Destroys local user, local token and token from localStorage.
   */

  destroySession() {
    this.setUser(null);
    this.setTokenToStorage(null);
    this.setToken(null);
  }

  /**
   * Name of item in localStorage to store token.
   * @returns {string}
   */

  get tokenName() {
    return 'token';
  }
};

SessionService.$inject = [];