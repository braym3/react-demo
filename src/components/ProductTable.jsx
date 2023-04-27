import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const products = [
    { id: 1, name: "Strawberries", amount: 283, type: "Food"},
    { id: 2, name: "Bananas", amount: 347, type: "Food"},
    { id: 3, name: "Chair", amount: 59, type: "Furniture"}
];

const productRows = products.map(product =>
    <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.amount}</td>
        <td>{product.type}</td>
    </tr>
);

const ProductTable = () => {

    const [productType, setType] = useState("");

    return(
        <div className='content'>
            <Form>
            <Form.Group className="mb-3" controlId="formBrand">
                <Form.Label>Search by product type</Form.Label>
                <Form.Control type="text" placeholder="Brand" value={productType} onChange={(e) => setType(e.target.value)}/>
                </Form.Group>
            </Form>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows({productType})}
                </tbody>
            </Table>
        </div>
    );   
};

export default ProductTable;