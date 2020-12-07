import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Image from './components/Image/Image';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
// import Modal from "./components/Modals/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import LogIn from './components/Modals/LogIn';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    
    <div className="App">
      <Header/>
      <Carousel/>
     
      <br/><br/>
      <h3>Post & Articles</h3>
      <Image/>
      <br/><br/>
      <div>
      <button variant="primary" onClick={handleShow}>ADD</button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <LogIn/>
      </Modal.Body>
      <Modal.Footer>
      <button variant="secondary" onClick={handleClose}>
      Close
      </button>
      {/* <button variant="primary" onClick={handleClose}>
      Save Changes
      </button> */}
      </Modal.Footer>
      </Modal>
      </div>
      <br/><br/>
      <Cards/>
      <br/><br/>
      <button type="button" class="btn btn-primary">Add Articles</button>
      <br/><br/><br/>
      <Footer/>


      
    </div>
  );
}

export default App;
