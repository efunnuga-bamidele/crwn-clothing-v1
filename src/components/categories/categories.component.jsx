
//styles
import { CategoriesContainer } from './categories.styles.jsx'
//Components
import CategoryItem from '../category-item/category-item.component';

const Categories = ({categories}) => {
   
    return(
        <CategoriesContainer>
            {categories.map(({ title, id, imageUrl}) => (
                <CategoryItem title={title} id={id} imageUrl={imageUrl} key={id} />
            ))}
      </CategoriesContainer>
    )
} 

export default Categories;