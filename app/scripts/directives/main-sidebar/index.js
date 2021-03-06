'use strict';

var ngModule = require('../../module');
var template = require('./template.html');

ngModule.directive('mainSidebar', [
  function() {
    return {
      template: template,
      replace: true,
      restrict: 'E',
      scope: {
        userProfile: '=',
        metrics: '=?',
        datapackageFilter: '=?'
      },
      link: function($scope) {
        $scope.editProfile = function() {
          $scope.$emit('profile.edit');
        };
      }
    };
  }
]);
