import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import '../App.css';
import '../App.scss';
import Header from '../Header';

export default function NotFoundPage(props) {
    return (
        <div className="App">
            <Header navElement={<NavLink to='/'>{"<--"} Back to All Images</NavLink>}></Header>
            <div>
                404 NOT FOUND. UH OH!
            </div>
        </div>
    );
}

