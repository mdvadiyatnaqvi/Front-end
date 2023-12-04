import React from 'react'

const TodoItem = () => {
    return (
        <div className='item-con'>
            <tr>
                <td className='col col-5 text-item'>Go to College</td>
                <td className='col col-5 text-item'>10/12/2020</td>
                <td>
                    <input className="btn btn-danger" type="button" value="Delete" />
                </td>
            </tr>
        </div>
    )
}

export default TodoItem