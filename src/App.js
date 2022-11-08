import { Routes, Route,  } from 'react-router-dom';
import { useContext } from 'react';

import { GlobalStyle } from './global.styles';

//Components
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

//context
import  { UserContext } from './context/user.context';

const App = () => {

  const { currentUser } = useContext(UserContext);
 

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
