import React from 'react';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.css';


const Header=()=>{

    return(
        <div class="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={styles.dropdown}>
            <button class="btn btn-secondary dropdown-toggle"type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
             Join
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">LogIn</a>
                <a class="dropdown-item" href="#">SignUp</a>
                
            </div>
            </div>

            
            <a class="navbar-brand" href="#">Blog</a>
            </nav>
            </div>

    )
}

export default Header;