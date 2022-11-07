import { useContext } from 'react';

//context
import  { CartContext } from '../../context/cart.context'

//styles
import Button, {BUTTON_TYPE_CLASS} from '../button/button.component';
import {
    ProductCardContainer,
    Footer,
    Name,
    Price
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`name`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart} >Add to cart</Button>
        </ProductCardContainer>
    )

}

export default ProductCard;