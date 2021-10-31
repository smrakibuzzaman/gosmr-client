import React from 'react';
import useAuth from '../hooks/useAuth';

const Cart = () => {
    const {cart} = useAuth();
    let total=0;
 for (const item of cart){
    total = total + parseFloat(item.price);
 }
    return (
        <div className="text-secondary fw-bold">
            <h3>Booking Summary</h3>
<h3>Tour Selection:{cart.length} </h3>
<h4>Total:{total} </h4>
        </div>
    );
};

export default Cart;