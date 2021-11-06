import React, { useEffect, useState } from 'react';

import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
const [tours, setTours]= useState([]);


useEffect(()=>{
    fetch('https://dry-thicket-57543.herokuapp.com/tourpackages')
    .then(res=>res.json())
    .then(data=>setTours(data))
},[])


    return (
        <div>
           <div className="container">
               <div >
                   <h1 className="text-secondary fw-bold"> Tour Packages </h1>
                 <div className="row">
                 {
                       tours.map(tour=><TourPackage key={tour._id} tour={tour} ></TourPackage>)
                   }
                 </div>
               </div>
           </div>
        </div>
    );
};

export default TourPackages;