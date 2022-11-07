import { useNavigate } from 'react-router-dom';

//styles
import {
    CategoryContainer,
    BackgroundImage,
    Body
} from './category-item.styles.jsx'

const CategoryItem = ({ category }) => {
    const {  title, id, imageUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)
    return(
        <CategoryContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl = {imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </CategoryContainer>
    )
}

export default CategoryItem;