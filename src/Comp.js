
import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
 const Comp = (props) => {
     const [line,setLine]= useState(false);
     const cutIt =()=>{
         setLine(true)
     }
    return (
    <div className="todo_style">
        <section onClick={cutIt}>
            <DeleteIcon className="deleteIcon"/>
        </section>
<li style={{textDecoration: line ? "line-through":"none"}}>{props.text}</li>

     
    </div>
        
    )
}

export default Comp;
