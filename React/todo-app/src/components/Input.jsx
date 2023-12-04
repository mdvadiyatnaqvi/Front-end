import React from 'react'

const Input = () => {
    return (
        <div>
            <input type="text" className="col col4 item" placeholder='Enter TODO' />
            <input type="date" className="col col4 item" />
            <input type="button" value="Add" className='btn btn-primary item' />
        </div>
    )
}

export default Input;