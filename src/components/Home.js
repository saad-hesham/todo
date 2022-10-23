import React, { Component } from 'react';
import Form from "./Form"
import TodoList from "./TodoList"
import { useState ,useEffect} from 'react';
import { DragDropContext,Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';





function Home() {
  const [inputText,setInputText] = useState("")
  const [Todos,setTodos] = useState([])
  useEffect(() => {
    const previousData = JSON.parse(localStorage.getItem("Todos"));
    setTodos(previousData);
  },[])
  //and if something changes in the dependency's value in this case inputText the function that is passed as the first argument runs each time
  useEffect(() => {
   localStorage.setItem('Todos', JSON.stringify(Todos));
  }, [Todos])
  
  const handleRemoveItem = (e) => {
    let arr = Todos
    arr.splice(e,1)
    setTodos([...arr])
  }
 
  const comp = (e) => {
    let arr = Todos
    arr[e].complete=true
    setTodos([...arr])
  }
  const [characters, updateCharacters] = useState(Todos);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

  
    const [reorderedItem] = Todos.splice(result.source.index, 1);
    Todos.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(Todos);
  } 
 
  const Tasks = Todos.map(function(i,index){
    console.log(i.id)
  
    if(i.complete==true){
      return <TodoList id ={i.id} index = {index}value={i.text} Todos={Todos} setTodos={setTodos} inputText={inputText} remove={()=>handleRemoveItem(index)} compelte={()=>comp(index)} class="Task completed"/>
    }
    return <TodoList id ={i.id} index = {index} value={i.text} Todos={Todos} setTodos={setTodos} inputText={inputText} remove={()=>handleRemoveItem(index)} compelte={()=>comp(index) } class="Task"/>
  })
return(
  <div>
      <Form inputText={inputText} setInputText={setInputText} Todos={Todos} setTodos={setTodos} />

   <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="Tasks"  {...provided.droppableProps} ref={provided.innerRef}>
            
                   
                     {Tasks}
                    
                  
             
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
       
 



</div>
)
 
}

export default Home