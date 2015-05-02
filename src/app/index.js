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
      	views: {
	      	'conteudo': {
	      		templateUrl: 'app/components/pacientes/pacientes.html',
	      		controller: 'PacientesController as pac'
	      	}
      	}
      });

    $urlRouterProvider.otherwise('/pacientes/');
  })
;
