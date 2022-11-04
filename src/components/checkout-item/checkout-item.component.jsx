import { useContext } from 'react';

//context

import { CartContext } from '../../context/cart.context';
//styles
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { removeItem, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;


    const clearItemHandler = () => removeItem(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeCartItemHandler = () => removeItemFromCart(cartItem);
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'> 
                <div className="arrow" onClick={removeCartItemHandler}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
               
            <span className='price'> {price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;