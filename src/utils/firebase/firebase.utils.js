import {  initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
    
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXNAGZ96ugabKhS_apy_6-CRlmVPxqrEg",
    authDomain: "crown-clothing-8c337.firebaseapp.com",
    projectId: "crown-clothing-8c337",
    storageBucket: "crown-clothing-8c337.appspot.com",
    messagingSenderId: "512571239795",
    appId: "1:512571239795:web:7cd1c2a73aca2173c8e906"
  };

//   const firebaseApp = initializeApp(firebaseConfig);
    initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


  //Firestore initialization
  export const db = getFirestore();

  //add new collection from file to firebase online
  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    })

    await batch.commit()
    console.log('done');
  }

  //get categories from database collection
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
 } 
  //Function to create new user on authentication
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

    if (!userAuth) return;

        const userDocRef = doc(db, 'users', userAuth.uid);
        const userSnapshot = await getDoc(userDocRef)

        if (!userSnapshot.exists()){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try{
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation
                });
            }catch (error){
                console.log('error creating the user', error.message)
            }
        }
        return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signAuthUserInWithEmailAndPassword = async (email, password) => {
    if (!email || !password){
        return;
    }
    return await signInWithEmailAndPassword(auth, email, password);
};

    export const signOutUser = () => signOut(auth);

    // using Observer to monitor state change in authentication
    export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
