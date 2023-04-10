import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add something.</p>
    }
    else{
        message = <div>
            <h3>Borolox</h3>
            <p><small>Thanks for giving your money.</small></p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                message
            }
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button
                        onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. BY using if else
 */