'use strict';

angular.module('test')
  .controller('PacientesController', function () {
    this.pacientes = [{
    	nome: 'teste1'
    }, {
    	nome: 'teste2'
    }, {
    	nome: 'teste3'
    }
    ]
  });
