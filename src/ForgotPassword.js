import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from './useCustomContext';
import { Link, Navigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [error, seterror] = useState("");
    const [loading, setLoading] = useState(false);
    const { resetPassword, setCurrentUser, currentUser } = useUserContext();
    const passref = useRef();
    const confirmpassref = useRef();
    const emailref = useRef();
    const handlesubmit = async (e) => {
        e.preventDefault();
        // if (passref.current.value !== confirmpassref.current.value) {
        //     return seterror("Passwords do not match")
        // }
        try {
            seterror("")
            setLoading(true)
            await resetPassword(emailref.current.value)
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
            {/* <div className='App'> */}
            <Form onSubmit={handlesubmit}>
                <h1>RESET PASS</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailref} type="email" placeholder="Enter email" />
                </Form.Group>
                
                <Link to='/login'>Already have an account? Login</Link><br /><br />
                <Button disabled={loading} variant="primary" type="submit">
                    Reset
                </Button>
            </Form>
        </div>
    )
}

export default ForgotPassword
