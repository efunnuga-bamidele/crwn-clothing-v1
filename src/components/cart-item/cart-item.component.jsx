
//styles
import {
    CartItemContainer,
    ItemDetails,
    Name,
    Price } from './cart-item.styles.jsx';


const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img className='image-container' src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <Price className='price'>
                    {quantity} x {price}
                </Price>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;