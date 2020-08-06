import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/LogoMain.png';
import Button from '../Button'

//import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        

            <nav className="Menu">
                <Link to="/">
                <img className="Logo" src={Logo} alt="Aluraflix Logo"/>
    
                </Link>
                <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
                </Button>
            </nav>
           
        

    );
}

export default Menu