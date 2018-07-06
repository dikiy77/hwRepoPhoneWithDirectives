"use strict";

export  default function PhoneInfo(){

    return {
        restrict: 'AE',
        scope: {
            thumbnail: '=',
            phone: '=',
        },
            templateUrl: 'templates/directives/phone-info.html',
            controller: ['$scope' , function ( $scope ){

                    //console.log($scope);

                $scope.includeTemplate= function (){

                    return 'templates/scripts.html';

                };//includeTemplate

                $scope.setThumbnail = $scope.$parent.setThumbnail;

                $scope.addPhoneToCart = $scope.$parent.addPhoneToCart;

            }]


    };//return

}//PhoneInfo