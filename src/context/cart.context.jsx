import { createContext, useState, useEffect } from "react";


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
    cartCount: 0

});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCatCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const removeItem = (singleItemToRemove) => {
        setCartItems(removeSingleItem(cartItems, singleItemToRemove));

    }

      
    
    useEffect(() => {
        const countQuantity = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity , 0 )
        setCatCount(countQuantity)
    }, [cartItems])
    // console.log(cartItems)
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, removeItem};
   
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
