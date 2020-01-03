class SidebarController {
  constructor($scope, $state, envService) {
    'ngInject';

    this.name = 'sidebar';

    this.$scope = $scope;
    this.$state = $state;

    this.apiUrl = envService.read('apiUrl');
  }

  $onInit() {
    this.$scope.$watch(() => this.$state.current.name, () => {
      this.stateName = this.$state.current.name;
    });
  }
}

export default SidebarController;
