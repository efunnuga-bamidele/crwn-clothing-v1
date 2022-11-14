import { useSelector } from "react-redux";

//context
import { selectCategoriesMap } from "../../store/category/category.selector";

//component
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return(
       <div className="category-preview-container">

            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products}/>
                })
            }

            
       </div>
    )
}

export default CategoriesPreview;