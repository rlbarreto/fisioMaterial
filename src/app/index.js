'use strict';

angular.module('test', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial', 'lumx'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
