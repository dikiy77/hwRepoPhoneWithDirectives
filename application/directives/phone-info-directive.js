"use strict";

export  default function PhoneInfo(){

    return {
        restrict: 'AE',
        scope: {
            thumbnail: '=',
            phone: '=',
        },
        templateUrl: 'templates/directives/phone-info.html',
        controller: ['$scope', 'CartService' , function ( $scope, CartService ){

                    //console.log($scope);


                $scope.setThumbnail = function (photo ){

                    $scope.thumbnail = photo;

                };//setThumbnail

                $scope.addPhoneToCart = function ( phone ){
                    CartService.addPhone( phone );
                };
        }],

        link: function (  ) {

            $(document).ready(() => {

                $('#PhonesOwlCarousel').owlCarousel({
                    items: 2,
                    nav: true,
                    autoWidth: true,
                    margin: 10
                });
            });
        },


    };//return

}//PhoneInfo