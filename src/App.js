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

function App() { // component - function that returns JSX
  return ( // if you want to return multiple things - put in a div
    <div>
      <MyComponent />
      <Cat />
      <Trainer/>
      <MyButton />
      <Converter/>
      <Login/>
      <Car/>
      {/* <ProductTable/> */}
      <Counter/>

      {people.map(({id, name, age}) => 
          <Person key={id} name={name} age={age} />
      )};

      {/* <ComponentWithProps header='Yo' content='Look at this great content' number={2} nonexistent='boo'/> */}
    </div>
  );
}

export default App;
