import { useContext } from 'react';
//styles
import {
    CheckoutContainer,
    CheckoutHeader,
    CheckoutBlock,
    Total
} from './checkout.styles.jsx'

//context
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext); 

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutBlock>
                    <span>Product</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Description</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Quantity</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Price</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Remove</span>
                </CheckoutBlock>

            </CheckoutHeader>
            {cartItems && cartItems.map((cartItem, index) => 
                (
                    <CheckoutItem key={index} cartItem={cartItem}/>
                )
            
            )}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default CheckOut;