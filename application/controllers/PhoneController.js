"use strict";

export  default class PhoneController{

    constructor($scope, phone , CartService ){

        $scope.thumbnail = phone.images[0];

        $scope.phone = phone;

        $scope.addPhoneToCart = function ( phone ){
            CartService.addPhone( phone );
        };


        $scope.setThumbnail = this._setThumbnail.bind( this, $scope );

    }

    _setThumbnail($scope , photo ){

        $scope.thumbnail = photo;

    }//_setThumbnail

}