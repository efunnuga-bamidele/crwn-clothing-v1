import { useContext } from 'react';
//styles
import './checkout.styles.scss'

//context
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext); 

    const reduceQuantity = (event) => {
        console.log(event)
        removeItemFromCart(event)
    }

    const increaseQuantity = (event) => {
        console.log(event)
        addItemToCart(event)
    }
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
            {cartItems && cartItems.map((cartItem, index) => 
                (
                    <CheckoutItem key={index} cartItem={cartItem}/>
                )
            
            )}
            <span className='total'>Total: 0 </span>
        </div>
    )
}

export default CheckOut;