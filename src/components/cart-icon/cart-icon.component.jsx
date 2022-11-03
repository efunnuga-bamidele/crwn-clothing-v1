import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
//styles
import './cart-icon.styles.scss';

//context
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    return (
        <div className='cart-icon-container' onClick={() => isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;