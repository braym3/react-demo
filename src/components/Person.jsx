import Alert from 'react-bootstrap/Alert';

const Person = ({name, age}) => (
    <Alert className="content col-5">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </Alert>
);

export default Person;