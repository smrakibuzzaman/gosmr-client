import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = ()=>{
  
const [user, setUser]= useState({});
const [isLoading, setIsLoading] = useState(true);
const [cart, setCart] =useState([]);
const auth = getAuth();

    const signInUsingGoogle=()=> {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
    setUser(result);
      })
      .finally(()=>setIsLoading(false));
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

    const handleBooking = tour=>{
      const selectTours = [...cart, tour];
      setCart(selectTours);
    }

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        cart,
        handleBooking 
    }
}

export default useFirebase;