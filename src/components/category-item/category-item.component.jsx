

//styles
import {
    CategoryContainer,
    BackgroundImage,
    Body
} from './category-item.styles.jsx'

const CategoryItem = ({ title, id, imageUrl}) => {
    return(
        <CategoryContainer>
            <BackgroundImage imageUrl = {imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </CategoryContainer>
    )
}

export default CategoryItem;