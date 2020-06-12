import React from 'react'

export default({title , id , delet}) => {
    return (
        <div className="item">
            <label>{title}</label>
            <button onClick={()=>delet(id)}>X</button>
        </div>
    )
}


