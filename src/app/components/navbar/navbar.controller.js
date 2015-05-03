;(function() {
	'use strict';

	angular.module('test')
	  .controller('NavbarController', function ($state, navbarService) {
	    this.date = new Date();
	    this.stateService = $state;
	    this.selectedTab = navbarService.selectedTab;
	  });
})();