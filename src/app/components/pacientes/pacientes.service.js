;(function() {
	'use strict';

	angular.module('test')
	.factory('pacientesService', function pacientesService($q, $timeout) {
		var list = function() {
			var deferred = $q.defer();
			$timeout(function() {
				var retorno = [{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				},{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				},{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				},{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				},{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				},{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				},{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				},{
					imagem: 'https://pbs.twimg.com/profile_images/477780353831407616/H6N4UUz6_400x400.jpeg',
					nome: 'Rafael Lessa Barreto',
					dataNascimento: new Date('07-31-1981'),
					endereco: 'Rua Nome da Rua',
					telefones: [{tipo: 'celular', numero: '21981899736', principal: true}],
					email: "nome@gmail.com"
				}];
				deferred.resolve(retorno);

			});
			
			return deferred.promise;
		};

		return {
			list: list
		};
	});
})();