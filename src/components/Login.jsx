import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Login = () => { // saves customers username & password from a login form
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const printDetails = (e) => {
        e.preventDefault();
        alert('Username: ' + username + '\nPassword: ' + password);
    };

    return(
        <div className='content login'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We will share all of your data.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={printDetails}>
                    Print
                </Button>
            </Form>
        </div>
    );
    
};

export default Login;