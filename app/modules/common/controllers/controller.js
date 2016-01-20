export default class Controller {
  constructor() {
    let vm = this;

    let injections = Array.prototype.slice.call(arguments);
    let injectionNames = vm.constructor.$inject;

    if(Array.isArray(injectionNames)) {
      vm.injections = injectionNames.map(function (injection, index) {
        return { [injection]: injections[index] };
      });
    }
  }
}

Controller.$inject = [];