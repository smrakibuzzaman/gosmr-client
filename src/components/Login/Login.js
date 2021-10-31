import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    return (
        <div id="login">
    
      <div>
         <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign in</button>
      </div>
        
    </div>
    );
};

export default Login;