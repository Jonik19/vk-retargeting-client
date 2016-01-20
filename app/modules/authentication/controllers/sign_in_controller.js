import Controller from '../../common/controllers/controller';

export default class SignInController extends Controller {
  constructor() {
    super(arguments);

    this.user = {};
  }

  signIn(user) {
    this.injections.AuthenticationService.authenticate(user)
      .then(this.redirectOnSuccess.bind(this))
      .catch(this.showErrors.bind(this));
  }

  redirectOnSuccess(user) {
    this.injections.$state.go('home');
  }

  showErrors(error) {
    alert(JSON.stringify(error));
  }
}

SignInController.$inject = ['$http', 'AuthenticationService', '$state'];