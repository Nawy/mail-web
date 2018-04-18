import React, {Component} from 'react';
import ModeSwitcher from '../../containers/modeSwithcer';
import Auth from "../../containers/auth";


const Header = (props) => {
        return (
           <div className="container" style={{margin:"20px"}}>
               <Auth style={{margin:"20px"}}/>
               <ModeSwitcher style={{margin:"20px"}}/>
           </div>
        )
    };


export default Header;