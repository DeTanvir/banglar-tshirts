import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Sister</h2>
            <p>grandpa has: {money}</p>
        </div>
    );
};

export default Sister;