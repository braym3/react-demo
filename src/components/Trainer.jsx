import Table from 'react-bootstrap/Table';

const trainers = [
    { id: 1, name: "Jordan", age: 29},
    { id: 2, name: "Andrew", age: 20}
];

const trainerRows = trainers.map(trainer =>
    <tr key={trainer.id}>
        <td>{trainer.id}</td>
        <td>{trainer.name}</td>
        <td>{trainer.age}</td>
    </tr>
);

const Trainer = () => (
    <div className='content'>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {trainerRows}
            </tbody>
        </Table>
    </div>
);

export default Trainer;