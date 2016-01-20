import Injector from '../services/injector';

/**
 * Common controller for extending.
 */

export default class Controller extends Injector {
  constructor(args) {
    super(args);
  }
}

Controller.$inject = [];