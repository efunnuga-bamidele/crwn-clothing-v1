import { useContext } from "react";

import { Routes, Route } from 'react-router-dom';

import './shop.styles.scss';

//context
import { CategoriesContext } from "../../context/categories.context";

//component
// import ProductCard from "../../components/product-card/product-card.component";

// import CategoryPreview from '../../components/category-preview/category-preview.component';

import CategoriesPreview from "../categories-preview/categories-preview.component";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return(
       <Routes>
            <Route index element={<CategoriesPreview />} />
       </Routes>
    )
}

export default Shop;