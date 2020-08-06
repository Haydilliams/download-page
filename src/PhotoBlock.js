import React, { Component } from 'react';
import './App.css';

class PhotoBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {image: 'image link', imageName: 'imageName'}
    }

    render() {
        return (
            <div>
                <div className='photo-cell'>
                </div>
                <p>{this.state.image}</p>
                <p>{this.state.imageName}</p>
            </div>
        );
    }
}
 
export default PhotoBlock;