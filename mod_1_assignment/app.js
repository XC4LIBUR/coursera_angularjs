(function () {
    angular.module("lunchChecker", [])
    .controller("msg", msg);

    msg.$inject=['$scope'];

    function msg($scope) {
        $scope.txt ="";
        $scope.check = function () {
            var x = $scope.txt.split(',');
            var len = x.length;
            if($scope.txt==""){
                $scope.message='Enter Valid DATA';
            }else{
                print(len);
            }
            
        }

        function print(len) {
            if(len > 3){
                $scope.message='Too Much';
            } else{
                $scope.message='Enjoy';
            }

        }
    }


})();