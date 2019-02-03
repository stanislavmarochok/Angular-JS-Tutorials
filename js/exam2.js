var app = angular.module('app2', []);

app.controller('ctrl1', function ($scope) {

    $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
    $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);


});

app.controller('badCtrl', function ($scope) {

    var badFeelings = ["Disregarded", "Unimportant", "Rejected", "PowerLess"];

    $scope.bad = badFeelings[Math.floor(Math.random() * 4)];

});

app.controller('goodCtrl', function ($scope) {

    var goodFeelings = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];

    $scope.good = goodFeelings[Math.floor(Math.random() * 4)];

});