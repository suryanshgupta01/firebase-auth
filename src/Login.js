import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from './useCustomContext';
import { Link, Navigate } from 'react-router-dom';
import glogo from './google.png'
import ghlogo from './github.jpg'


const Login = () => {
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);
    const { login, handleGoogle, handleGithub } = useUserContext();
    const passref = useRef();
    const emailref = useRef();

    const handlesubmit = async (e) => {
        e.preventDefault()

        try {
            seterror("")
            setloading(true)
           await login(emailref.current.value, passref.current.value)
            Navigate("/dashboard")
        } catch {
            seterror("Failed to log in")
        }
        finally {
            setloading(false);
        }
    }
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form onSubmit={handlesubmit}>
                <h1>LOGIN</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailref} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passref} type="password" placeholder="Password" />
                </Form.Group>
                <Link to='/'>Dont have an account? Signup</Link><br /><br />
                <Link to='/forgot-password'>Forgot Password?</Link><br /><br />
                <Button disabled={loading} variant="primary" type="submit">
                    Login
                </Button>
                <img src={glogo} className='image' onClick={handleGoogle} />
                <img src={ghlogo} className='image' onClick={handleGithub} />
            </Form>
        </div>
    )
}

export default Login
