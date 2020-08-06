import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import PhotoBlock from './PhotoBlock';



class PhotoGrid extends Component {
    
    constructor(props) {
        super(props);
        this.state = { amountInRows: 1 }
    }

    render() {
        var amountOfBlocks = 3;
        const rows = []
        for (var i = 0; i < amountOfBlocks; i++) {
            rows.push(<PhotoBlock />);
        }
        return rows;
        
    }
    
    GetAmountOfBlocks = () => {
        const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
        if (isBigScreen) {
            return 3;
        } else if (isTabletOrMobile) {
            return 1;
        } else {
            return 2;
        }
    }
}

export default PhotoGrid;