import React from 'react';

function ShortDate(props) {
    const dStr = props.date;
  
    let newDate = dStr.substring(0, dStr.indexOf(':', dStr.indexOf(':')+1))

    return (
        <div className="tile__headline headline--light">{newDate || ''}</div>
    );
}

export default ShortDate;
