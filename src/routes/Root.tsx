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

  return (
    <>
      <Container maxWidth="md">          
        <Typography variant="h3" gutterBottom> TODO </Typography>
        <TodoTable todos = {todos} setTodos={setTodos} />
      </Container>
    </>
  );
}