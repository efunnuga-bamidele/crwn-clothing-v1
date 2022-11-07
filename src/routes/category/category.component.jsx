import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

//context
import { CategoriesContext } from '../../context/categories.context';

//styles
import { SubcategoryContainer, CategoryTitle } from './category.styles.jsx';


const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
      <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <SubcategoryContainer>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} /> )
                }
            </SubcategoryContainer>
        </>
  )

}

export default Category;