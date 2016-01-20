export default class Controller {
  constructor(injectionsArgs) {
    let vm = this;

    vm.injections = {};

    let injections = Array.prototype.slice.call(injectionsArgs);
    let injectionNames = vm.constructor.$inject;

    if(Array.isArray(injectionNames)) {
      injectionNames.forEach(function (injection, index) {
        vm.injections[injection] = injections[index] ;
      });
    }
  }
}

Controller.$inject = [];