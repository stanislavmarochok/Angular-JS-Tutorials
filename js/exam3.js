var app = angular.module('app3', []);

app.controller('gListCtrl', function ($scope) {

    $scope.groceries = [
        { item: "Tomatoes", purshased: false },
        { item: "Potatoes", purshased: false },
        { item: "Bread", purshased: false },
        { item: "Hummus", purshased: false },
    ]

    $scope.getList = function () {
        return $scope.showList ? "ungroceryList.html" : "groceryList.html"
    };
});