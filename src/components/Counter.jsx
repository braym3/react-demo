import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [historyId, setHistoryId] = useState(0);
    const [countHistory, setHistory] = useState([]);

    return(
        <>
        <div className='row'>
            <div className='content col-5'>
                <div>
                    <label>Count:</label>
                    <input value={count} readOnly className='count-output'/>
                </div>
                <div className='content counter-buttons'>
                    <ButtonGroup aria-label="Counter">
                        <Button variant="secondary" onClick={() => {
                            setHistoryId(historyId + 1);
                            setHistory([...countHistory, { id: historyId, operation: `${count} - 5 = ${count-5}` }]);
                            setCount(count - 5);
                            }}>-5</Button>
                        <Button variant="primary" onClick={() => {
                            setHistoryId(historyId + 1);
                            setHistory([...countHistory, { id: historyId, operation: `${count} - 1 = ${count-1}` }]);
                            setCount(count - 1);
                            }}>-1</Button>
                        <Button variant="secondary" onClick={() => {
                            setHistoryId(0);
                            setHistory([]);
                            setCount(0);
                            }}>R</Button>
                        <Button variant="primary" onClick={() => {
                            setHistoryId(historyId + 1);
                            setHistory([...countHistory, { id: historyId, operation: `${count} + 1 = ${count+1}` }]);
                            setCount(count + 1);
                            }}>+1</Button>
                        <Button variant="secondary" onClick={() => {
                            setHistoryId(historyId + 1);
                            setHistory([...countHistory, { id: historyId, operation: `${count} + 5 = ${count+5}` }]);
                            setCount(count + 5);
                            }}>+5</Button>
                    </ButtonGroup> 
                </div>
            </div>
            <div className='content col-4'>
                {countHistory.map(modification => // transform array of count modifications into array of <Alert> items - key unique identifier among siblings
                    <p key={modification.id}>{modification.operation}</p> 
                )}
            </div>
        </div>
        
        </>
    );
};

export default Counter;
