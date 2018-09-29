import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <React.Fragment>
            <div>
            <NavLink to="/">Home </NavLink> |
            <NavLink to="/Map">Map</NavLink>
            </div>
            <button>Neew!</button>
        </React.Fragment>
        
    );
};

export default Navigation;