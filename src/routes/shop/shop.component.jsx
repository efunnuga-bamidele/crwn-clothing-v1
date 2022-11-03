import { useContext } from "react";

import './shop.styles.scss';

//context
import { ProductsContext } from "../../context/products.context";

//component
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return(
        <div className="products-container">
            {products.map((product) => (
                    <ProductCard key={product.id} product = {product} />

            ))}
        </div>
    )
}

export default Shop;