import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from './useCustomContext';
import { Link, Navigate } from 'react-router-dom';
import glogo from './google.png'
import ghlogo from './github.jpg'

const Signup = () => {
    const [error, seterror] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup, handleGoogle, handleGithub } = useUserContext();
    const passref = useRef();
    const confirmpassref = useRef();
    const emailref = useRef();

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (passref.current.value !== confirmpassref.current.value) {
            return seterror("Passwords do not match")
        }
        try {
            seterror("")
            setLoading(true)
            await signup(emailref.current.value, passref.current.value)
            Navigate('/login')
        }
        catch (e) {
            seterror("Failed to create an account")
            console.error(e);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form onSubmit={handlesubmit}>
                <h1>SIGN UP</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailref} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passref} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmpassref} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Link to='/login'>Already have an account? Login</Link><br /><br />
                <Button disabled={loading} variant="primary" type="submit">
                    Signup
                </Button>

                <img src={glogo} className='image' onClick={handleGoogle} />
                <img src={ghlogo} className='image' onClick={handleGithub} />

            </Form>
        </div>
    )
}

export default Signup
