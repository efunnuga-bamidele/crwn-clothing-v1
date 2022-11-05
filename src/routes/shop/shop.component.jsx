import { Fragment, useContext } from "react";

import './shop.styles.scss';

//context
import { CategoriesContext } from "../../context/categories.context";

//component
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return(
       <>

            {
                Object.keys(categoriesMap).map(title => (
                    <Fragment key={title}>
                        <h1>{title.toUpperCase()}</h1>
                        <div className="products-container">
                            {categoriesMap[title].map((category) => (
                                    <ProductCard key={category.id} product = {category} />
            
                            ))}
                        </div>
                    </Fragment>
                ))
            }

            
       </>
    )
}

export default Shop;