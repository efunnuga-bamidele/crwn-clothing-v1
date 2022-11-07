//styles
import { AuthentcationContainer } from './authentication.styles.jsx';

//Components
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";


const Authentcation = () => {



    return(
        <AuthentcationContainer>   
           
            <SignInForm />
            <SignUpForm />
        </AuthentcationContainer>
    )
}

export default Authentcation