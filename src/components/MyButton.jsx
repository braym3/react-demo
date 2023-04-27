import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const MyButton = () => {
    let [count, setCount] = useState(0); // sets default (like getter/setter)
    return(
        <div className='content'>
            <input value = {count}/>
            <Button variant="primary" onClick={() => setCount(count + 1)} className="content my-button">
            +1
            </Button>
        </div>
    );
};

export default MyButton;