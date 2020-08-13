import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import '../App.css';
import '../App.scss';

export default function NotFoundPage(props) {
    return (
        <div className="App">
            <div className="header">
                <NavLink to='/'>{"<--"} Back to All Images</NavLink>
            </div>
            <div>
                404 NOT FOUND. UH OH!
            </div>
        </div>
    );
}

