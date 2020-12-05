import React from 'react';
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.css';


const Footer=()=>{

    return(
        <div className={styles.footer}>
            
        <div class="container">
        <br/><br/>
        <div class="row">
        <div class="col-sm">
            One of three columns
            One of three columns
            One of three columns
            One of three columns
            One of three columns
        </div>
        <div class="col-sm">
            One of three columns
            One of three columns
            One of three columns
            One of three columns
            One of three columns
        </div>
        <div class="col-sm">
            One of three columns
            One of three columns
            One of three columns
            One of three columns
            One of three columns
            <br/>
        <h7 className={styles.contact}>ContactUs www.abc.lk </h7>
    
        </div>
        </div>
        </div>
        </div>

    )
}

export default Footer;

