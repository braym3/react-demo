import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Counter = () => {
    let [count, setCount] = useState(0);

    return(
        <>
        <div className='content'>
            <div>
                <label>Count:</label>
                <input value={count}/>
            </div>
            <div>
               <ButtonGroup aria-label="Counter" className='content counter-buttons'>
                    <Button variant="secondary" onClick={() => setCount(count - 5)}>-5</Button>
                    <Button variant="primary" onClick={() => setCount(count - 1)}>-1</Button>
                    <Button variant="secondary" onClick={() => setCount(count = 0)}>R</Button>
                    <Button variant="primary" onClick={() => setCount(count + 1)}>+1</Button>
                    <Button variant="secondary" onClick={() => setCount(count + 5)}>+5</Button>
                </ButtonGroup> 
            </div>
            
        </div>
        </>
    );
};

export default Counter;
