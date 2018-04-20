import React, {Component} from 'react';
import ModeSwitcher from '../../containers/ModeSwithcer';
import Auth from "../../containers/Auth";


const Header = (props) => {
        return (
           <div className="container" style={{margin:"20px"}}>
               <Auth style={{margin:"20px"}}/>
               <ModeSwitcher style={{margin:"20px"}}/>
           </div>
        )
    };


export default Header;