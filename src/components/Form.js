import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'




function Form({inputText,setInputText,Todos,setTodos}) {
    function setInputHandler(e){
       
        setInputText(e.target.value)
        
    }

    function setTodosHandler(e){
        let id = Math.random()*1000
        let string = id.toString()
        if(inputText !=="")
        setTodos([...Todos,{id:string,text:inputText,complete:false}])
        
       
    }
return(
  <div className='container'>
      <div className='row'>
          <div className='col-sm-12' style={{display:"flex",justifyContent:"center"}}>
  <div className='inputTextArea' onChange={setInputHandler}>
      <input type="text" placeholder='Enter The Work Here'/>
 
      <FontAwesomeIcon icon={faPlus} style={{fontSize:"2em",
          fontSize: "2em",
    fontWeight: "bold",
    position: "absolute",
    background: "rebeccapurple",
    color: "white",
    padding: "2px",
   right:"3px",
    top:"3px",
    cursor:"pointer"
}} onClick={setTodosHandler}/>
      </div>
      </div>
  </div>
</div>
)
 
}

export default Form