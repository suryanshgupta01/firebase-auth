import React from 'react'
import Card from 'react-bootstrap/Card';
import { useUserContext } from './useCustomContext';
import { Link, Navigate } from 'react-router-dom';

const Dashboard = () => {
    const { currentUser, logout, deleteUser } = useUserContext();

    const handlelogout = () => {
        logout();
    }
    const handledelete = () => {
        deleteUser();
    }
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        {currentUser && currentUser.displayName}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{currentUser.email && currentUser.email}</Card.Subtitle>
                    {currentUser.photoURL && ((<img src={currentUser.photoURL} style={{ width: '70px' }} />)||<br/>)}
                    <Link to="/reset-details" >
                        Update Profile
                    </Link>
                    <br />
                    <Link to="/" onClick={handledelete} className="btn btn-danger w-50 mt-3">Delete</Link>
                    <br />
                    <Link to="/" onClick={handlelogout} className="btn btn-primary w-100 mt-3">Logout</Link>
                    {/* <Button href="#">Another Link</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Dashboard
