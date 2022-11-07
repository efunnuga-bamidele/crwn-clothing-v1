import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//components
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../context/cart.context';
//styles
import { 
    CartDropdownContainer,
    EmptyMessage,
    CartItems
    } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const redirect = useNavigate();

    const handleRedirection = () => {
        setIsCartOpen(false)
        redirect('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
                
            </CartItems>
                
            <Button onClick={handleRedirection}>GO TO CHECKOUT</Button>
        
        </CartDropdownContainer>
    )

}

export default CartDropdown;