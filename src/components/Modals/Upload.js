import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

const Upload=()=>{
    // const [file,setfile]=useState(null);
    // const [preview,setpreview]=useState();

    
    // function uploadImage(fff){
    //     setfile(fff);
    //     console.log(file);        //store image in database
        //upload it into webpage
    // }

    return(
    <Form>
    <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input"> 
    {console.log(Form.f)}
    </Form.File>   
    <br/><br/>
    
    <button >SUBMIT</button>
    </Form.Group>
    </Form>
       
     
       
    )

};
export default Upload;