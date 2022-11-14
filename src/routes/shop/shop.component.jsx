import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './shop.styles.scss';

//component
// import ProductCard from "../../components/product-card/product-card.component";

// import CategoryPreview from '../../components/category-preview/category-preview.component';

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategoriesMap } from '../../store/category/category.action';

const Shop = () => {


    const dispatch = useDispatch();
        
    //use effect for category map 
    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            
            dispatch(setCategoriesMap(categoryMap))
        } ;
        getCategoryMap();
    }, [])
   

    return(
       <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
       </Routes>
    )
}

export default Shop;