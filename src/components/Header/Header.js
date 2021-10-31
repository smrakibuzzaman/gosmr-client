import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import banner from '../../images/banner.jpg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navigation/>
            <div className="d-flex text-center"  style={{background: `url(${banner})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundPosition: 'center', height: '40vh'}}
 >
           <div className="m-5">

      <h1 className="title text-warning" > 
            Refresh Yourself
            <br />
             by Travelling Your Favourite Destination
             </h1>
             <Link to="/tourPackages"> <button className="btn p-2 button text-light">Tour Packages</button> </Link>
      </div>
             </div>
        </div>
    );
};

export default Header;