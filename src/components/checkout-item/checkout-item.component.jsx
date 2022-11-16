import { useDispatch, useSelector } from 'react-redux';

import { removeItem, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';
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
    // const { removeItem, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, price, quantity } = cartItem;


    const clearItemHandler = () => dispatch(removeItem(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeCartItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
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