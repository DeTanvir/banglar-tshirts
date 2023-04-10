import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price, gender} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="tshirt-picture" />
            <div>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;