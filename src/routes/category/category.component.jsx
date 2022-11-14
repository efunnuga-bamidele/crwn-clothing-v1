import {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

//context
// import { CategoriesContext } from '../../context/categories.context';
import { selectCategoriesMap } from '../../store/category/category.selector';

//styles
import { SubcategoryContainer, CategoryTitle } from './category.styles.jsx';


const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap);
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