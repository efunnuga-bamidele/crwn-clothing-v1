import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';

//styles
import {
    CheckoutContainer,
    CheckoutHeader,
    CheckoutBlock,
    Total
} from './checkout.styles.jsx'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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