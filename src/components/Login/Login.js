import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {signInUsingGoogle, setUser, setIsLoading} = useAuth();
    const location = useLocation();
    const redirect = location?.state?.from;
    const history = useHistory();

    return (
        <div id="login">
    
      <div>
         <button onClick={()=>{
           signInUsingGoogle()
           .then((result) => {
            setUser(result.user);
            history.push(redirect)
              })
              .finally(()=>setIsLoading(false));}} className="btn btn-primary">Google Sign in</button>
      </div>
        
    </div>
    );
};

export default Login;