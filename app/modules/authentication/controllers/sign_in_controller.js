export default class SignInController {
  constructor($http) {
    this.user = {};
  }

  signIn(user) {
    alert(`${user.username} ${user.password}`);
  }
}

SignInController.$inject = ['$http'];