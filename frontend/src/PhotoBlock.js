import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { NavLink } from 'react-router-dom';
import Download from './pages/Download.js'

class PhotoBlock extends Component {
    render() {

        // Rather than importing every single image, this is a nice one compact solution.
        // kudos to: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack

        function importAll(r) {
            let images = {};
            r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

        const images = importAll(require.context('./images', false, /\.(jpe?g)$/));
        var imageName = this.props.imageName;
        var imagePath = this.props.imageName + "500.jpg";
        var readableImageName = this.props.imageName.replace(/_/g, " ");

        return (
            <div className='photo-wrapper'>
                <NavLink to={'/download/' + imageName} className='photo-background' render={<Download props={imageName} />}>
                    <div className="photo-background-slide"></div>
                    <img src={images[imagePath]} alt={readableImageName} />
                    <div className='photo-button-holder'>
                        <div className='photo-button-text'>Download</div>
                    </div>
                </NavLink>
                <div className='photo-text'>{readableImageName}</div>

            </div>
        );
    }
}

export default PhotoBlock;