import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Carousel.module.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

const Carousel=()=>{
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src={img1} height="400px" alt="First slide" className={styles.img}></img>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={img2} height="400px" alt="Second slide" className={styles.img}></img>
            </div>
            <div class="carousel-item">
             <img class="d-block w-100" src={img3} height="400px"  alt="Third slide" className={styles.img}></img>
            </div>
        </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
)}
export default Carousel;