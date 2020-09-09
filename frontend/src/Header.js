import React from 'react';

export default function Header(props) {
    return (
        <div className="header">
            {props.navElement}
        <div className="header-pad"></div>
        <div className="title">
          HAYDEN CLAY
        </div>
        <div className="title-small">
          H C W
        </div>
      </div>
    )
}