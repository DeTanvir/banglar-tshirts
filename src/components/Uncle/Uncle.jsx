import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    
    return (
        <div>
            <h2>Uncle</h2>
            <p>grandpa has: {money}</p>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
            <button onClick={() => setMoney(money + 1000)}>Send 1000</button>
        </div>
    );
};

export default Uncle;