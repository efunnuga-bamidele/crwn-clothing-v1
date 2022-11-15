import { Outlet, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as Crown} from '../../assets/crown.svg';

//context
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

//firestore
import { signOutUser } from '../../utils/firebase/firebase.utils';

//component
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

//redux
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector'

//Styles
import { 
        NavigationContainer, 
        LogoContainer, 
        NavLinksContainer, 
        NavLink
    } from './navigation.styles';


const Navigation = () => {
//destructuring the value from the context
    // const { currentUser, setCurrentUser } = useContext(UserContext);
    // const { currentUser } = useContext(UserContext);
    //pulling states from redux reducers
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);
    const redirect = useNavigate();
    
    return(
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crown />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            
                            <NavLink as='span' onClick={signOutUser}>
                            
                                SIGN OUT
                            </NavLink>
                            
                        ) : (
                        <NavLink to='/auth'>
                            SIGN-IN
                        </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;