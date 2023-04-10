import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add something.</p>
    }
    else {
        message = <div>
            <h3  className={`blue bold ${cart.length === 2 ? 'red' : 'green'}`}>Borolox</h3>
            <p><small>Thanks for giving your money.</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 3 ? 'orange' : 'red'}>Order Summary: {cart.length}</h2>
            {
                cart.length > 2
                    ? <span>Aro kino</span>
                    : <span>Fokira</span>
            }
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
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. BY using if else
 * 2. ternary operator: condition ? 'for true' : 'for false'
 * 3. Logical && : (it works if and only the condition is true)
 * 4. Logical || : (it works if and only the condition is false)
 */

/**
 * CONDITIONAL CSS class
 * 1. use ternary: add class only by condition
 * 2. inside template string: use default class and adding class by condition inside template string
 */