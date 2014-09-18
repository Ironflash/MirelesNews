'use strict'

angular.module('PostCtrl', [])
  .controller('PostController', function ($scope) {
    
    $scope.posts = [
    {author:"Gregory LaFlash", content:"Hello"},
    {author:"Gregory LaFlash", content:"Test"},
    {author:"Gregory LaFlash", content:"Test2"}
    ];
  })