
import SearchFormCtrl from './search_form_controller';
import SearchFormComponent from './search_form_component';

export default angular.module('app.search.components.search', [])

  .controller('SearchFormComponentCtrl', SearchFormCtrl)
  .directive('searchForm', SearchFormComponent)
  .name;
