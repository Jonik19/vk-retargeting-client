import Injector from './injector';

/**
 * Common controller for extending.
 */

export default class Service extends Injector {
  constructor(args) {
    super(args);
  }
}

Service.$inject = [];