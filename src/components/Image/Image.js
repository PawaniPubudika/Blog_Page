import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

const Image=()=>{
    return(
        <div>
            <div class="container">
            <div class="row">
            <div class="col-sm">
            <div class="card" >
            <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" height="10%"></img>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div> 
            
            
            </div>
            <div class="col-sm">
            <div class="card" >
            <img class="card-img-top" src={img3} alt="Card image cap" height="20%"></img>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div> 
             
            </div>
            </div>
            </div>
            

        </div>

    )


}
export default Image;