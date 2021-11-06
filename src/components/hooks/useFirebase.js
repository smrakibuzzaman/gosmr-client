import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = ()=>{
  
const [user, setUser]= useState({});
const [isLoading, setIsLoading] = useState(true);
// const [cart, setCart] =useState([]);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle=()=> {
        setIsLoading(true);
        
    return signInWithPopup(auth, googleProvider)
    
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
              setUser(user);
            } else {
             setUser({});
            }
            setIsLoading(false);
          });
          return ()=> unSubscribe();
    },[])
    
    const logOut =()=> {
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false));
    }


    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
       
       
        setUser,
        setIsLoading
    }
}

export default useFirebase;