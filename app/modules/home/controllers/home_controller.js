export default class HomeController {
  constructor($http) {
    let vm = this;

    vm.message = 'Home page';
  }
}

HomeController.$inject = ['$http'];