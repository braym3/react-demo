import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap stylesheet
import MyComponent from './components/MyComponent'; // import MyComponent
import Cat from './components/Cat';
import MyButton from './components/MyButton';
import Trainer from './components/Trainer';
import ComponentWithProps from './components/ComponentWithProps';
import Converter from './components/Converter';
import Login from './components/Login';
import Car from './components/Car';
import ProductTable from './components/ProductTable';
import Counter from './components/Counter';
import Person from './components/Person';
import people from './people.json'; // import trainers json file - need file extension for non js files
import Accordion from 'react-bootstrap/Accordion';

function App() { // component - function that returns JSX
  return ( // if you want to return multiple things - put in a div
    <div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Cats</Accordion.Header>
          <Accordion.Body>
            <MyComponent />
            <Cat />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Trainers</Accordion.Header>
          <Accordion.Body>
            <Trainer/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Simple Counter</Accordion.Header>
          <Accordion.Body>
            <MyButton/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Distance Converter</Accordion.Header>
          <Accordion.Body>
            <Converter/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Log-in Detail Printer</Accordion.Header>
          <Accordion.Body>
            <Login/>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
          <Accordion.Header>Car Form</Accordion.Header>
          <Accordion.Body>
            <Car/>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="6">
          <Accordion.Header>Product Table Search</Accordion.Header>
          <Accordion.Body>
            <ProductTable/>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="7">
          <Accordion.Header>Extreme Counter</Accordion.Header>
          <Accordion.Body>
            <Counter/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>People</Accordion.Header>
          <Accordion.Body>
            {people.map(({id, name, age}) => 
                <Person key={id} name={name} age={age} />
            )};
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* <ComponentWithProps header='Yo' content='Look at this great content' number={2} nonexistent='boo'/> */}
    </div>
  );
}

export default App;
