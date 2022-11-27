import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TodoTrashTable from "../components/Table/TodoTrashTable";
import { getAllTodos } from "../fetch/ApiFetch";
import TopLinkBtns from "../components/TopLinkBtns";

export default function Trash() {
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
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="h3" gutterBottom> TRASH </Typography>
          </Grid>
          <Grid item xs={3}>
            <TopLinkBtns pageTitle="Trash"/>
          </Grid>
        </Grid>
        <TodoTrashTable todos = {todos} setTodos={setTodos} />
      </Container>
    </>
  );
}