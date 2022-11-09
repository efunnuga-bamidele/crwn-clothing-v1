import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (cartItems, cartItemToRemove) => {
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

export const removeSingleItem = (cartItems, singleItemToRemove) => {
      // find if cartItems contains productToAdd
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === singleItemToRemove.id
        );

        if (existingCartItem){
            return cartItems.filter(cartItem => cartItem.id !== singleItemToRemove.id)   
        }

}
 
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeItem: () => {},
    cartCount: 0,
    cartTotal: 0,

});

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
} 

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){
        case 'SET_CART_ITEMS':
           return {
                ...state,
                ...payload,
            }
        case 'SET_IS_CART_OPEN':
            return {
                ...state, 
                isCartOpen: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }

}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CartProvider = ({children}) => {
    const [ { cartItems, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    //dispatch functions      
    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = cartItems.reduce((total, cartItem) => 
        total + cartItem.quantity , 0 );

        const newCartTotal = cartItems.reduce((total, cartItem) => {
            return (total + (cartItem.quantity * cartItem.price))
        }, 0);

        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_CART_ITEMS, 
            { 
                cartItems: newCartItems, 
                cartTotal: newCartTotal, 
                cartCount: newCartCount 
            })
        );

        };

    const setIsCartOpen = (newIsCartOpen) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, newIsCartOpen ))
    }

    //Other functions 
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
        console.log(cartCount)
    }
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }
    const removeItem = (singleItemToRemove) => {
        const newCartItems = removeSingleItem(cartItems, singleItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

      

    // console.log(cartItems)
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, removeItem, cartTotal};
   
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
