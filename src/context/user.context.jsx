import { createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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

    const { type, payload } = action;

    switch(type){
        case 'SET_CURRENT_USER':
            return{
                currentUser: payload
            }
        
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

//end of reducer implement

export const UserProvider = ({ children }) => {
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE)


    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)); 
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
