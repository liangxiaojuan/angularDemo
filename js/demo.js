/**
 * Created by dxs on 2015-06-15.
 */
function EventController($scope){
    $scope.count = 0;
    $scope.$on("MyEvent",function(){
        $scope.count++;
    })
}