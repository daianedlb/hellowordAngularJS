var app = angular.module('helloworldApp', []);

app.controller('mainCtrl', function($scope) { //$controlador
    $scope.Nome = '';
    $scope.sobrenome ='';

    $scope.exibirConteudo = function(Nome, sobrenome) {
        alert(Nome +' '+ sobrenome);
    }
});