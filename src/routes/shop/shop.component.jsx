import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './shop.styles.scss';

//component
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategories } from '../../store/category/category.action';

const Shop = () => {


    const dispatch = useDispatch();
        
    //use effect for category map 
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray))
        } ;
        getCategoriesMap();
    }, [])
   

    return(
       <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
       </Routes>
    )
}

export default Shop;