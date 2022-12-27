import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TopLinkBtns from "../components/Button/TopLinkBtns";
import { createTodo, getAllTodos } from "../fetch/ApiFetch";
import{ useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


type NewTodo = {
  task: String;
  detail: String;
  status: String;
  priority:  String;
};
  
type Status = "NOT STARTED" | "DOING" | "DONE"
type Priority = "HIGH" | "MIDDLE" | "LOW"

export default function New() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputField, setInputField] = useState<NewTodo>(
    {
      task: '',
      detail: '',
      status: '',
      priority:  '',
    }
  );

  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputField({ ...inputField, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(inputField)
      .then(response=>{
        if(!response.ok){
          console.error('server error')
        }else{
          getAllTodos().then((data)=>{
            dispatch({
              type: 'GET_ALL_TODO_DATA',
              payload: data,
            })
          });    
          navigate("/")
        }
        })
      .catch((error) => console.error('network error',error));
  };

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
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField 
              fullWidth
              sx={{ display: "flex" }} 
              required id="outlined-required" 
              label="Title" 
              margin="normal"
              name="task"
              defaultValue={inputField.task}
              onChange={inputHandler}
              />

              <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Detail"
              multiline
              rows={10}
              sx={{ display: "flex" }}
              margin="normal"
              name="detail"
              defaultValue={inputField.detail}
              onChange={inputHandler}
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
                          defaultValue={inputField.status}
                          onChange={inputHandler}
                          >
                          <FormControlLabel name="status" value="NOT STARTED" control={<Radio />} label="NOT STARTED" />
                          <FormControlLabel name="status" value="DOING" control={<Radio />} label="DOING" />
                          <FormControlLabel name="status" value="DONE" control={<Radio />} label="DONE" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Priority</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          defaultValue={inputField.priority}
                          onChange={inputHandler}
                          >
                          <FormControlLabel name="priority" value="HIGH" control={<Radio />} label="HIGH" />
                          <FormControlLabel name="priority" value="MIDDLE" control={<Radio />} label="MIDDLE" />
                          <FormControlLabel name="priority" value="LOW" control={<Radio />} label="LOW" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth size='large' variant="contained" type="submit">
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
        </form>
      </Container>
    </>
  );
}