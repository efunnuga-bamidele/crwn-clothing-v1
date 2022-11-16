import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
     (cartItem) => cartItem.id === productToAdd.id
     );
     
    //if found increment quantity
    if(existingCartItem){
     return cartItems.map((cartItem) => (
         cartItem.id === productToAdd.id 
         ? { ...cartItem, quantity: cartItem.quantity + 1}
         : cartItem
         ))
    }else{
         return [ ...cartItems, { ...productToAdd, quantity: 1}];
    };
 
    
 };
 
const removeCartItem = (cartItems, cartItemToRemove) => {
     // find if cartItems contains productToAdd
     const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
      );
      
     //if found increment quantity
     if(existingCartItem.quantity === 1){
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
     }
 
     return cartItems.map((cartItem) => (
         cartItem.id === cartItemToRemove.id 
         ? { ...cartItem, quantity: cartItem.quantity - 1}
         : cartItem
     ));   
  };
 
const removeSingleItem = (cartItems, singleItemToRemove) => {
       // find if cartItems contains productToAdd
       const existingCartItem = cartItems.find(
         (cartItem) => cartItem.id === singleItemToRemove.id
         );
 
         if (existingCartItem){
             return cartItems.filter(cartItem => cartItem.id !== singleItemToRemove.id)   
         }
 
 }

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
   
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItem = (cartItems, singleItemToRemove) => {
    const newCartItems = removeSingleItem(cartItems, singleItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}