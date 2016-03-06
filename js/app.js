var xian = angular.module('xian',['ngRoute']);

xian.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    // controller:'indexCtrl',
    templateUrl:'tmplate/home.html'
  })
  .when('/category',{
    controller:'categoryCtrl',
    templateUrl:'tmplate/category.html'
  })
  .when('/show/:name',{
    controller:'showCtrl',
    templateUrl:'tmplate/show.html'
  })
  .otherwise({
    redirectTo:'/'
  })
}]);

xian.factory('$data',function () {
    return{
      data: [
        {name:'beijing',pic:''},
        {name:'goucheng',pic:''},
        {name:'fazhan',pic:''},
        {name:'youshi',pic:''},
        {name:'zhaoshang',pic:''}
      ]
    }
});

xian.controller('indexCtrl',['$scope',function(){
}]);
xian.controller('categoryCtrl',['$scope','$data',function($scope,$data){
  $scope.cates = $data.data;
}]);

xian.controller('showCtrl',['$scope','$routeParams','$data',function($scope,$routeParams,$data){
  $scope.name = $routeParams.name;
  $scope.item  = $data.data.filter(function(value,index){
    return value.name == $routeParams.name;
  })
  console.log($scope.item);
}]);
