"use strict";

export  default function inBasketDirective() {

    return {
        restrict: 'AE',

        scope: {
            cart: "=",
        },

        templateUrl: 'templates/directives/inBasket.html',

        controller:['$scope', 'CartService', function ( $scope, CartService ){
            $scope.RemoveItem = function ( index ){
                CartService.removePhone( index );

            };

            $scope.ClearCart = function (){

                CartService.clearCart();

            };

            $scope.AddToCart = function (phone){

                CartService.addPhone( phone );
                //$scope.apply();
            };

            $scope.popPhone = function (index){

                CartService.popPhone( index );
                //$scope.apply();
            };
        }]

    }//return

}//inBasketDirective
