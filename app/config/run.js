/**
 * Run
 */

export default function run($state, config, $rootScope) {
  $rootScope.config = config;
  $rootScope.$state = $state;

};

run.$inject = ['$state', 'config', '$rootScope'];
