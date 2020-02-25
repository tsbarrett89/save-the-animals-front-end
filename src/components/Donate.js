import React from 'react';
import axios from 'axios';

const Donate = () => {
    const donation = e => {
        console.log(e)
    }

    return (
        <button onClick={donation}>Donate</button>
    )
}

export default Donate