import { Container } from "@mui/material";
import TodoTable from "../TodoTable";
import { adTodo, getAllTodos } from "../fetch/ApiFetch";
import { useState,useEffect } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';

export default function Root() {
  
  type Todo = {
    id: number;
    task: String;
    status: Status;
    priority:  String;
    created_at:  String;
    updated_at:  String;
  };

  type Status = "NOT STARTED" | "DOING" | "DONE"

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    return () => {
      getAllTodos().then(todos => {
        setTodos(todos);
      });
    }
  },[])

  function handleClick(id :number,status:String){
    // adTodo(id,status)
    console.log(id)
    if(status === "DOING"){
      status = "DONE"
    } else if(status === "DONE"){
      status = "NOT STARTED"
    } else if(status === "NOT STARTED"){
      status = "DOING"
    }
    setTodos(
      todos.map((todo,index)=> (index === id ? Object.assign(todo,{status: status}): todo))
    );
  }

    return (
      <>
        <Container maxWidth="md">          
          <Typography variant="h3" gutterBottom> TODO </Typography>
          <TodoTable todos = {todos} setTodos={setTodos} handleClick={handleClick} />
        </Container>
      </>
    );
  }