(function () {
    angular
        .module('turtleFacts')
        .controller('listCtrl', ListController);


    function ListController($scope, $http) {
        $scope.activeTurtle = {};
        $scope.changeActiveTurtle = changeActiveTurtle;
        
        function changeActiveTurtle(index) {
            $scope.activeTurtle = index;
        };

        $http({
            method: 'GET',
            url: '/ninjasJSON'
        }).then(function (data) {
            $scope.turtlesData = data.data;
        }, function (error) {
            console.log(error);
        });
    }

})();