import Service from '../../common/services/service';

/**
 * StateChangeService is service to catch access to protected states.
 */

export default class StateChangeService extends Service {
  constructor() {
    super(arguments);

    // for storing promise from api
    this.checked = null;
  }

  /**
   * Redirects to 'sign-in' state if not authenticated user tries to get protected page.
   *
   * @param event Event object from
   * @param toState State user tries to get
   */

  onProtected(event, toState) {
    let self = this;

    if(toState.data && (toState.data.authenticate === true) && !self.injections.SessionService.isAuthenticated()) {
      event.preventDefault();

      this.injections.$state.go('auth.sign-in');
    }
  }

  /**
   * Redirects to 'admin.rooms.list' state if authenticated user tries to get only-unprotected page.
   * This method is needed for authentication states.
   *
   * @param event Event object from
   * @param toState State user tries to get
   */

  onUnprotectedOnly(event, toState) {
    let self = this;

    if(toState.data && (toState.data.authenticate === false) && self.injections.SessionService.isAuthenticated()) {
      event.preventDefault();

      this.injections.$state.go('admin.rooms.list');
    }
  }

  /**
   * Calls AuthenticationService.check method which makes request to api only once.
   * Returns existing promise call or makes request.
   *
   * @returns {null|*|*|Promise.<T>}
   */

  check() {
    if(null === this.checked) {
      this.checked = this.injections.AuthenticationService.check();
    }

    return this.checked;
  }

};

StateChangeService.$inject = ['AuthenticationService', '$state', 'SessionService'];