import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import '../App.css';
import '../App.scss';

class NotFoundPage extends Component {

    render() {
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
}
export default NotFoundPage

