import { createContext, useEffect, useReducer } from "react";

//firebase
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});


//Implement Reducers
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log('dispatch')
    console.log(action)

    const { type, payload } = action;

    switch(type){
        case 'SET_CURRENT_USER':
            return{
                currentUser: payload
            }
        
        default:
            throw new Error(`Unhandled tyle ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

//end of reducer implement

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE)
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user}); 
    }


    const value = { currentUser, setCurrentUser };
    

    useEffect(() => {
       const unsubscribe = onAuthStateChangedListener((user) => {
            if (user){
                createUserDocumentFromAuth(user); 
            }
            setCurrentUser(user);
        })

        return unsubscribe
    }, [])

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
};

/*
const userReducer = (state, action) => {
    return{
        currentUser:''
    }
}

*/