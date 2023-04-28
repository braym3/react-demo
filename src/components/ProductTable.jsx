import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const ProductTable = () => {

    const [searchedType, setSearchedType] = useState("");

    const products = [
        { id: 1, name: "Strawberries", amount: 283, productType: "Food"},
        { id: 2, name: "Pen", amount: 59, productType: "Stationery"},
        { id: 3, name: "Bananas", amount: 347, productType: "Food"},
        { id: 4, name: "Chair", amount: 59, productType: "Furniture"},
        { id: 5, name: "Socks", amount: 123, productType: "Clothing"},
        { id: 6, name: "Bed", amount: 59, productType: "Furniture"},
        { id: 7, name: "Pencil", amount: 239, productType: "Stationery"}
    ];
    
    const productRows = products.filter(p => p?.productType?.toLowerCase().startsWith(searchedType.toLowerCase())).map(product => (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.productType}</td>
        </tr>
    ));

    return(
        <div className='content'>
            <Form>
            <Form.Group className="mb-3" controlId="formType">
                <Form.Label>Search by product type</Form.Label>
                <Form.Control type="text" placeholder="Type" value={searchedType} onChange={(e) => setSearchedType(e.target.value)}/>
                </Form.Group>
            </Form>

            <div className='product-table'>
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
        </div>
    );   
};

export default ProductTable;