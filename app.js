(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchChecker);

LunchChecker.$inject = ['$scope'];
function LunchChecker($scope) {
  $scope.lunch = "";
  $scope.lunchMessage = "";

  $scope.checkLunch = function () {
    var arrayOfLunch = $scope.lunch.split(',');
    //console.log(arrayOfLunch);
    var count = 0;
    for(var i = 0; i<arrayOfLunch.length; i++) {
      if (arrayOfLunch[i] !== "") {
        //console.log(arrayOfLunch[i]);
        count++;
      }
    }
    //console.log("count: " +count);
    DisplayMessage(count);
  };

  function DisplayMessage (count) {
    if (count === 0) {
      $scope.lunchMessage = "Please enter data first";
    } else if (count <= 3 && count > 0) {
      $scope.lunchMessage = "Enjoy!";
    } else {
      $scope.lunchMessage = "Too much!";
    };

  };
}
})();
