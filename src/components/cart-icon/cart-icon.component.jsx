import { useContext } from 'react';


//styles
import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount
} from './cart-icon.styles.jsx';

//context
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

 

    return (
        <CartIconContainer onClick={() => isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;