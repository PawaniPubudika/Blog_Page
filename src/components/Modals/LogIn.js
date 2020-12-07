import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Upload from './Upload';
import Modal from 'react-bootstrap/Modal';
   


const LogIn=()=>{
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    return(
        
    <Form>
        <div>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>


         <button variant="primary" onClick={handleShow}>SUBMIT</button>
        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Upload/>
        </Modal.Body>
        <Modal.Footer>
        <button variant="secondary" onClick={handleClose}> Close</button>
        </Modal.Footer>
        </Modal>
        </div>
        </Form>
       
    )

};
export default LogIn;