"use strict";

export  default class PhoneController{

    constructor($scope, phone ){

        $scope.thumbnail = phone.images[0];

        $scope.phone = phone;

    }

}