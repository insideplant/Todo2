import { Container } from "@mui/material";
import TodoTable from "../TodoTable";
import { changePriority,changeStatus, getAllTodos } from "../fetch/ApiFetch";
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
    priority:  Priority;
    created_at:  String;
    updated_at:  String;
  };

  type Status = "NOT STARTED" | "DOING" | "DONE"
  type Priority = "HIGH" | "MIDDLE" | "LOW"

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    return () => {
      getAllTodos().then((todos:Todo[]):void=> {
        console.log(todos);
        setTodos(todos);
      });
    }
  },[])



  function handlePriorityClick(id :number,priority:String): void{
    const test = changePriority(id,priority)
    console.log(test)
    if(priority === "HIGH"){
      priority = "MIDDLE"
    } else if(priority === "MIDDLE"){
      priority = "LOW"
    } else if(priority === "LOW"){
      priority = "HIGH"
    }

    setTodos(
      todos.map((todo,index)=> (index === id ? Object.assign(todo,{priority: priority}): todo))
      );
  }

    return (
      <>
        <Container maxWidth="md">          
          <Typography variant="h3" gutterBottom> TODO </Typography>
          <TodoTable todos = {todos} setTodos={setTodos} handlePriorityClick={handlePriorityClick}/>
        </Container>
      </>
    );
  }