import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const products = [
    { id: 1, name: "Strawberries", amount: 283, productType: "Food"},
    { id: 2, name: "Bananas", amount: 347, productType: "Food"},
    { id: 3, name: "Chair", amount: 59, productType: "Furniture"}
];

function productRows(productType){
    return(products.map(product =>
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.productType}</td>
        </tr>
    ));
};

const ProductTable = () => {

    const [productType, setType] = useState("");

    return(
        <div className='content'>
            <Form>
            <Form.Group className="mb-3" controlId="formType">
                <Form.Label>Search by product type</Form.Label>
                <Form.Control type="text" placeholder="Type" value={productType} onChange={(e) => setType(e.target.value)}/>
                </Form.Group>
            </Form>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </Table>
        </div>
    );   
};

export default ProductTable;