import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import TopLinkBtns from "../components/Button/TopLinkBtns";
import { useParams, useNavigate } from 'react-router-dom';
import{ useSelector,useDispatch } from "react-redux";
import { RootState } from "../redux/configureStore";
import { useState } from "react";
import { updateTodo } from "../fetch/ApiFetch";

type Todo = {
  id: number;
  task: String;
  detail: String;
  status: Status;
  priority:  Priority;
  created_at:  String;
  updated_at:  String;
  flag: number;
};

type Status = "NOT STARTED" | "DOING" | "DONE"
type Priority = "HIGH" | "MIDDLE" | "LOW"

export default function Edit() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const todosState= useSelector((state:RootState) => state.todosReducer.todos);
  const todo:Todo = getTodo(todosState,Number(params.editId));
 
  function getTodo(todos: Array<Todo>, id: number){
    const target = todos.find((todo:Todo)=> todo.id === id);
    if(target == null){
      throw new Error('idは存在しなければなりません');
    }
    return target;
  }
  const [inputField, setInputField] = useState({
    id: todo.id,
    task: todo.task,
    detail: todo.detail,
    status: todo.status,
    priority:  todo.priority,
  })

  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputField({ ...inputField, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodo(inputField)
      .then(response=>{
        if(!response.ok){
          console.error('server error')
        }else{
          dispatch({
            type: 'UPDATE_TODO',
            payload: inputField
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
            <Typography variant="h3" gutterBottom> Edit </Typography>
          </Grid>
          <Grid item xs={3}>
            <TopLinkBtns pageTitle="Edit" />            
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField 
              fullWidth
              sx={{ display: "flex" }} 
              id="outlined-required" 
              label="task" 
              name="task"
              margin="normal"
              defaultValue={todo.task}
              onChange={inputHandler}              
              />
              <TextField
              fullWidth
              id="outlined-required"
              label="detail"
              name="detail"
              multiline
              rows={10}
              sx={{ display: "flex" }}
              margin="normal"
              defaultValue={todo.detail ?? ''}
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
                          defaultValue={todo.status}
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
                          defaultValue={todo.priority}  
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
                    <Button fullWidth size='large' 
                      variant="contained" 
                      type="submit"
                    >
                      UPDATE
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth size='large' variant="outlined" onClick={() => {navigate(-1)}}>
                      CANCEL
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