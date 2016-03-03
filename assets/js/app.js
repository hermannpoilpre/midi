'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ui.materialize'])

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, httpInterceptor, $provide, $locationProvider) {

    $stateProvider
      .state('app', {
        url: '',
        abstract: true
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    httpInterceptor($httpProvider, $provide);
  });
