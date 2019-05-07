import React, { Component } from 'react';

function ShortDate(props) {
    const dStr = props.date;
  
    let newDate = dStr.substring(0, dStr.indexOf(':', dStr.indexOf(':')+1))

    return (
        <h6 className="text__h--light Tile__h6">{newDate || ''}</h6>
    );
}

export default ShortDate;
