;(function() {
	'use strict';

	angular.module('test', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial', 'lumx'])
	  .config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider
	      .state('home', {
	      	abstract: true,
	        url: '/',
	        views: {
	        	'inicio' : {
			        templateUrl: 'app/main/main.html',
			        controller: 'MainCtrl'		
	        	}
	        }
	        
	      })
	      .state('home.pacientes', {
	      	url: 'pacientes/',
	      	resolve: {
	      		pacientes: function(pacientesService, navbarService) {
	      			navbarService.selectedTab = 0;
	      			return pacientesService.list();
	      		}
	      	},
	      	views: {
		      	'conteudo': {
		      		templateUrl: 'app/components/pacientes/pacientes.html',
		      		controller: 'PacientesController as pac'
		      	}
	      	}
	      })
	      .state('home.especialidades', {
	        url: 'especialidades/',
	        resolve: {
	        	especialidades: function(navbarService) {
	        		navbarService.selectedTab = 1;
	        		return [];
	        	}
	        },
	        views: {
	        	'conteudo' : {
			        templateUrl: 'app/main/main.html',
			        controller: 'MainCtrl'		
	        	}
	        }
	        
	      });

	    $urlRouterProvider.otherwise('/pacientes/');
	});
})();