"use strict";


export default class CartService{

    constructor( localStorageService ){

       if(localStorageService.get('cart')){
           this.cart = localStorageService.get('cart');
       }//if
       else{
           this.cart = [];
       }//else

       this.localStorageService = localStorageService;

    }//constructor

    getCart(){
        return this.cart;
    }

    addPhone( phone ){

        let exists = this.cart.some( p => {
            return p.id === phone.id;
        } );

        if(!exists){
            this.cart.push( this._getSimplePhone( phone ) );
        }//if
        else{

            for ( let i = 0 ; i < this.cart.length ;  i++ ){

                let p = this.cart[i];

                if(p.id === phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

        this.localStorageService.set( 'cart' , this.cart );

    }

    _getSimplePhone( phone ){

        return {
            'id' : phone.id,
            'amount' : phone.amount || 1,
            'name' : phone.name,
        };

    }

    popPhone(index ){




                let p = this.cart[index];

                if(p.amount === 1){

                    this.removePhone( index );

                }//if
        else{
                    p.amount--;

        }//else

        this.localStorageService.set( 'cart' , this.cart );

    }


    clearCart(){

        this.localStorageService.clearAll();
        this.cart.length = 0;

    }

    removePhone( index ){

        this.cart.splice( index , 1 );
        this.localStorageService.set( 'cart' , this.cart );

    }//removePhone

}
