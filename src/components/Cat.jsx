import Alert from 'react-bootstrap/Alert';

const cats = [ 
    { id: 1, name: "Hamish", age: 15 },
    { id: 2, name: "Bob", age: 23 },
    { id: 3, name: "Floyd", age: 4 }
];

const alertCats = cats.map(cat => // transform array of Cats into array of <Alert> items - key unique identifier among siblings
    <Alert key={cat.id} className="content" variant={ // change variant style for every other alert
        cat.id % 2 === 0 ? 'primary' : 'secondary'
      }>
        <p>Name: {cat.name}</p>
        <p>Age: {cat.age}</p>
    </Alert>
);

const Cat = () => (
    <div>
       {alertCats} 
    </div>
);

export default Cat;