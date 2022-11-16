import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//components
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action'
//styles
import { 
    CartDropdownContainer,
    EmptyMessage,
    CartItems
    } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const redirect = useNavigate();
    const dispatch = useDispatch()

    const handleRedirection = () => {
        dispatch(setIsCartOpen(false));
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