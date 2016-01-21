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
    this.setUserToStorage(response.token);
    this.setUser(response.user);

    this.setTokenToStorage(response.token);
    this.setToken(response.token);

    return this.getUser();
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
    this.setTokenToStorage(token);
    this.setLocalToken(token);

    return this.getToken();
  }

  /**
   * Sets token to local variables.
   * @param {String} token
   * @returns {*}
   */

  setLocalToken(token) {
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
   * Returns user. If local token doesn't exist writes it from localStorage
   * to local variable and then returns.
   * @returns {null|*}
   */

  getUser() {
    if(this.user === null) {
      this.setLocalUser(this.getUserFromStorage());
    }

    // We can change this new object

    return JSON.parse(JSON.stringify(this.user));
  }

  /**
   * Sets user.
   * @param {String} user
   * @returns {*}
   */

  setUser(user) {
    this.setLocalUser(user);
    this.setUserToStorage(user);

    return this.getUser();
  }

  /**
   * Sets user to local variables.
   * @param {String} user
   * @returns {*}
   */

  setLocalUser(user) {
    return this.user = user;
  }

  /**
   * Sets user to localStorage.
   * @param {String} user
   */

  setUserToStorage(user) {
    return localStorage.setItem(this.userName, JSON.stringify(user));
  }

  /**
   * Returns user from localStorage.
   */

  getUserFromStorage() {
    return JSON.parse(localStorage.getItem(this.userName));
  }

  /**
   * Destroys local user, local token and token from localStorage.
   */

  destroySession() {
    this.setUser(null);
    this.setToken(null);
  }

  /**
   * Name of item in localStorage to store token.
   * @returns {string}
   */

  get tokenName() {
    return 'token';
  }

  /**
   * Name of item in localStorage to store user.
   * @returns {string}
   */

  get userName() {
    return 'user';
  }
};

SessionService.$inject = ['$q'];