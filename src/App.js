import { Routes, Route,  } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from './global.styles';

//firebase
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";


//Components
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

//redux imports
import { setCurrentUser } from './store/user/user.action';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
         if (user){
             createUserDocumentFromAuth(user); 
         }
         dispatch(setCurrentUser(user));
     });

     return unsubscribe
 }, [])



  return (
    <div>
    <GlobalStyle />
        <Routes>
          <Route path='/' element={<Navigation />} >
              <Route index element={<Home />} />
              <Route path='shop/*' element={<Shop />} />
              <Route path='auth' element={<SignIn />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='/checkout' element={<CheckOut />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
