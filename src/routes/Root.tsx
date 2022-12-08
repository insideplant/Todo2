import { Container, Grid } from "@mui/material";
import TodoTable from "../components/Table/TodoTable";
import { getAllTodos } from "../fetch/ApiFetch";
import { useState,useEffect } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import TopLinkBtns from "../components/TopLinkBtns";
import{ useSelector, useDispatch } from "react-redux";
import store from "../redux/store";
import { TodosState } from "../redux/todosReducer";

export default function Root() { 
  const todos2= useSelector((state:any) => state.todosReducer.todos);
  const dispatch= useDispatch();

  type Todo = {
    id: number;
    task: String;
    status: Status;
    priority:  Priority;
    created_at:  String;
    updated_at:  String;
    flag: number;
  };

  type Status = "NOT STARTED" | "DOING" | "DONE"
  type Priority = "HIGH" | "MIDDLE" | "LOW"

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getAllTodos().then((todos:Todo[]):void=> {
    setTodos(todos);
    });
  },[])

 

  useEffect(() => {
    getAllTodos().then((data)=>{
      dispatch({
        type: 'GET_ALL_TODO_DATA',
        payload: data,
      })
      
    });
    console.log(store.getState());
  },[dispatch]);
  

  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="h3" gutterBottom> TODO</Typography>
          </Grid>
          <Grid item xs={3}>
            <TopLinkBtns pageTitle="Root" />            
          </Grid>
        </Grid>
       
        <TodoTable todos = {todos} setTodos={setTodos} />
      </Container>
    </>
  );
}
