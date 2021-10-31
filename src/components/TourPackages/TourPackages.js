import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import useAuth from '../hooks/useAuth';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
const [tours, setTours]= useState([]);
const {handleBooking} = useAuth();

useEffect(()=>{
    fetch('/tours.json')
    .then(res=>res.json())
    .then(data=>setTours(data))
},[])


    return (
        <div>
           <div className="row">
               <div className="col-md-9 tour-container border-end border-3 mx-auto my-3">
                   <h1 className="text-secondary fw-bold"> Tour Packages </h1>
                 <div className="row">
                 {
                       tours.map(tour=><TourPackage tour={tour} handleBooking={handleBooking}></TourPackage>)
                   }
                 </div>
               </div>

               <div className="col-md-3 booking-container my-4">
<Cart></Cart>
               </div>
           </div>
        </div>
    );
};

export default TourPackages;