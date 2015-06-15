/**
 * Created by dxs on 2015-06-15.
 */

var userInfoModule = angular.module('UserInfoModule',[]);

userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){

    $scope.userInfo={
        email:"asdasdas@qq.com",
        password:"123",
        autoLogin:true
    };
    $scope.getFormData =function(){
        console.log($scope.userInfo)
    }
    $scope.setFormData =function(){
        $scope.userInfo={
            email:"sdasdas@qq.com",
            password:"12sds3",
            autoLogin:false
        }
    }

    }]);