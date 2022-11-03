import { Outlet, Link } from "react-router-dom";
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

//Styles
import './navigation.styles.scss';

const Navigation = () => {
//destructuring the value from the context
    // const { currentUser, setCurrentUser } = useContext(UserContext);
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    // const signOutHandler = async () => {
    //     const res = await signOutUser();
    //     setCurrentUser(null);
    // }
    
    return(
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Crown />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                        <Link className="nav-link" to='/auth'>
                            SIGN-IN
                        </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;