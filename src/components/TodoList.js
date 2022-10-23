import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Draggable } from 'react-beautiful-dnd';



function TodoList(props) {



return(

    <Draggable key={props.id} draggableId={props.id} index={props.index}>
        {(provided) => (
  <div className='container' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <div className='row'>
          <div className='col-sm-12' style={{display:"flex",justifyContent:"center"}}>
  <div className='TodoList' >
      <div className={props.class}>
          {props.value}
           <FontAwesomeIcon  onClick={props.compelte} icon={faCheck} style={{
                position:"absolute",
    right: "45px",
    background: "green",
    fontSize: "2em",
    padding: "3px",
    top: "8px",
    color: "white",
    cursor:"pointer"
}}/>
           <FontAwesomeIcon onClick={props.remove} icon={faTrashCan} style={{
                position:"absolute",
    right: "7px",
    background: "red",
    fontSize: "2em",
    padding: "3px",
    top: "8px",
    color: "white",
    cursor:"pointer"
}}/>
      </div>
  </div>
      
      </div>
  </div>
</div>
  )}
</Draggable>
)
 
}

export default TodoList