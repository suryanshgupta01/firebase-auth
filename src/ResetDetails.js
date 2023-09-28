import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from './useCustomContext';
import { Link, Navigate } from 'react-router-dom';
const ResetDetails = () => {
    const [error, seterror] = useState("");
    const [loading, setLoading] = useState(false);
    const { updateEmail1, updatePassword1, currentUser } = useUserContext();
    const passref = useRef();
    const confirmpassref = useRef();
    const emailref = useRef();

    const handlesubmit = (e) => {
        e.preventDefault();
        if (passref.current.value !== confirmpassref.current.value) {
            return seterror("Passwords do not match")
        }
        let promises = []
        // setLoading(true)
        seterror("")
        //email update feature is not working
        // if (emailref.current.value !== currentUser.email) {
        //     console.log(emailref.current.value)
        //     console.log(currentUser.email)
        //     promises.push(updateEmail1(emailref.current.value))
        // }
       
        if (passref.current.value) {
            console.log("passowrd change")
            updatePassword1(passref.current.value)
        }

        // Promise.all(promises)
        //     .then((value) => {
        //         console.log(value)
        //         Navigate("/")
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //         seterror("Failed to update account")
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <div className='App'> */}
            <Form onSubmit={handlesubmit}>
                <h1>Reset profile</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailref} disabled defaultValue={currentUser.email} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passref} type="password" placeholder="Leave blank for same" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmpassref} type="password" placeholder="Leave blank for same" />
                </Form.Group>
                <Link to='/'>Back</Link><br /><br />
                <Button disabled={loading} variant="primary" type="submit">
                    Reset detials
                </Button>
            </Form>
        </div>
    )
}

export default ResetDetails
