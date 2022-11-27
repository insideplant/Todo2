import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TopLinkBtns from "../components/TopLinkBtns";
import { createTodo } from "../fetch/ApiFetch";

export default function New() {

  type NewTodo = {
    task: String;
    detail: String;
    status: String;
    priority:  String;
    created_at:  String | null;
  };
    
  type Status = "NOT STARTED" | "DOING" | "DONE"
  type Priority = "HIGH" | "MIDDLE" | "LOW"
  const [todo,setTodo] = useState<NewTodo>(
    {
      task: '',
      detail: '',
      status: 'NOT STARTED',
      priority:  'HIGH',
      created_at:  null
    }
  );

  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo({...todo, task: e.target.value})
  }
  function handleDetailChange(e: React.ChangeEvent<HTMLInputElement>){
    setTodo({...todo, detail: e.target.value})
  }
  function handleStatusSet(e: React.ChangeEvent<HTMLInputElement>){
    setTodo({...todo, status: e.target.value})
  }
  function handlePrioritySet(e: React.ChangeEvent<HTMLInputElement>){
    setTodo({...todo, priority: e.target.value})
  }
  function handleCreate(){
    createTodo(todo);
  }

  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="h3" gutterBottom> New </Typography>
          </Grid>
          <Grid item xs={3}>
            <TopLinkBtns pageTitle="New" />            
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField 
            fullWidth
            sx={{ display: "flex" }} 
            required id="outlined-required" 
            label="Title" 
            margin="normal"
            value={todo.task}
            onChange={handleTaskChange}
            />

            <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Detail"
            multiline
            rows={10}
            sx={{ display: "flex" }}
            margin="normal"
            value={todo.detail}
            onChange={handleDetailChange}
            />
          </Grid>          
          <Grid item xs={6}>
            <Grid container spacing={1} >
                            
              <Grid container spacing={3} >
                <Grid item xs={12} >
                  <Grid container spacing={1} >
                  <Grid item xs={6}>
                    <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={todo.status}
                        onChange={handleStatusSet}
                        >
                        <FormControlLabel value="NOT STARTED" control={<Radio />} label="NOT STARTED" />
                        <FormControlLabel value="DOING" control={<Radio />} label="DOING" />
                        <FormControlLabel value="DONE" control={<Radio />} label="DONE" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group">Priority</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={todo.priority}
                        onChange={handlePrioritySet}
                        >
                        <FormControlLabel value="HIGH" control={<Radio />} label="HIGH" />
                        <FormControlLabel value="MIDDLE" control={<Radio />} label="MIDDLE" />
                        <FormControlLabel value="LOW" control={<Radio />} label="LOW" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth size='large' variant="contained" onClick={handleCreate}>
                    Create
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth size='large' variant="outlined">
                    Draft
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}