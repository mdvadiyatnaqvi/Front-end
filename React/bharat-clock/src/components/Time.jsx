import React from 'react'

const Time = () => {
    const time = new Date();

    return (
        <center>Time and Date is: {time.toLocaleTimeString()} and {time.toLocaleDateString()}</center>
    )
}

export default Time