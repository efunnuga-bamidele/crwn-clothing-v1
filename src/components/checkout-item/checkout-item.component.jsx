import { useContext } from 'react';

//context

import { CartContext } from '../../context/cart.context';
//styles
import {
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Quantity,
    Price,
    Arrow,
    Value,
    RemoveButton
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { removeItem, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;


    const clearItemHandler = () => removeItem(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeCartItemHandler = () => removeItemFromCart(cartItem);
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name> {name} </Name>
            <Quantity> 
                <Arrow onClick={removeCartItemHandler}>&#10094;</Arrow>
                    <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
               
            <Price> {price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;