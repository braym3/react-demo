import { useState } from 'react';

const Converter = () => {
    const [miles, setMiles] = useState(0);
    const [kms, setKms] = useState(0);

    const changeMiles = (e) => {
        const newMiles = e.target.value; // get the miles input - using triggered event
        setMiles(newMiles);
        setKms(newMiles*1.6);
    };

    const changeKms = (e) => {
        const newKms = e.target.value; // get the kms input - using triggered event
        setKms(newKms);
        setMiles(newKms/1.6);
    };

    return(
        <>
        <div className='content'>
            <div className='converter-input'>
                <label>Miles:</label>
                <input value={miles} onChange={changeMiles}/>
            </div>
            <div className='converter-input'>
                <label>KM/S:</label>
                <input value={kms} onChange={changeKms}/>   
            </div>
        </div>
        
        </>
    );
};



export default Converter;