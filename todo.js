var app = angular.module('todoApp', []);

app.controller('todoController', function ($scope) {
  $scope.input = '';
  $scope.editing = null;
  $scope.todos = [
    {task: 'Estuda para prova'},
    {task: 'Fazer compras'},
    {task: 'Aniversario do João dia 15'}
  ];

  $scope.add = add;
  $scope.remove = remove;

  function add(input) {
    if (input.length < 1) return;
    $scope.todos.push({title: input});
  }

  function remove(todo) {
    var todos = $scope.todos;
    var index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  }
});