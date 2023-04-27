import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Car = () => { // saves car brand, model, colour, year from form
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [colour, setColour] = useState("");
    const [year, setYear] = useState(0);

    const printDetails = (e) => {
        e.preventDefault();
        alert('Brand: ' + brand + '\nModel: ' + model + '\nColour: ' + colour + '\nYear: ' + year);
    };

    return(
        <div className='content car'>
            <h1>Car Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formColour">
                    <Form.Label>Colour</Form.Label>
                    <Form.Control type="text" placeholder="Colour" value={colour} onChange={(e) => setColour(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={printDetails}>
                    Print
                </Button>
            </Form>
        </div>
    );
    
};

export default Car;