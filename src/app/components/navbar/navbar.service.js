;(function() {
	'use strict';
	angular.module('test').factory('navbarService', function(){

		var selectedTab = 0;  

		return {
			selectedTab: selectedTab
		};
	});
})();