"use strict";

export default class CartController{

    constructor( $scope , CartService ){

        $scope.cart = CartService.getCart();

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

    }

};