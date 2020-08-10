import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { render } from 'react-dom';

class Download extends Component {

    render() {
        // Rather than importing every single image, this is a nice one compact solution.
        // kudos to: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

        const images = importAll(require.context('./images', false, /\.(jpe?g)$/));
        var imageName = this.props.match.params.imageName
        var imagePath = imageName + "500.jpg";
        var readableImageName = imageName.replace(/_/g, " ");

        return (
            <div className="App">
                <div className="header">
                    <NavLink to='/'>{"<--"} Back to All Images</NavLink>
                </div>
                <div className='download-wrapper'>
                    <img className='download-photo-block' src={images[imagePath]} alt={readableImageName}/>
                    <div className='download-text-block'>
                        A High-resolution download of {readableImageName}. Simply pay as little or as much as you want.
                    </div>
                </div>
            </div>
        );
    }
}
export default Download

