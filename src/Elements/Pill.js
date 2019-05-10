import React from 'react';
import '../css/elements/pill.css';

const Pill = (props) => {

    return (
        <button className="pill pill__secondary">
            <span className="pill__icon">
                <img src="../Images/noun_diskette_1939628.png"></img>
            </span>
        </button>
    );
}

export default Pill;