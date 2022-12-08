import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import TopLinkBtns from "../components/TopLinkBtns";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getTodo } from "../fetch/ApiFetch";
import { TodosState } from "../redux/todosReducer";
import{ useSelector} from "react-redux";

export default function Edit() {

  const params = useParams();
  const [todo,setTodo] = useState<Todo>({id: 4, task: '感謝の正拳突き',detail: null, status: 'DOING', priority: 'LOW',created_at: "", updated_at: "", flag: 0});
  const navigate = useNavigate();
  const todos1= useSelector((state:any) => state.todosReducer.todos);
  const todos2:Todo = todos1[Number(params.editId)];
  
  type Todo = {
    id: number;
    task: String;
    detail: String | null;
    status: Status;
    priority:  Priority;
    created_at:  String;
    updated_at:  String;
    flag: number;
  };

  type Status = "NOT STARTED" | "DOING" | "DONE"
  type Priority = "HIGH" | "MIDDLE" | "LOW"

  useEffect(() => {
    getTodo(params.editId).then((todo:Todo):void=> {
      setTodo(todo);
    });
  },[])

  // useEffect(() => {
  //   const todo2:Todo = todos2[Number(params.editId)];
  // },[])


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
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField 
            fullWidth
            sx={{ display: "flex" }} 
            required id="outlined-required" 
            label="Title" 
            margin="normal"
            value={todos2.task}
            // onChange={handleTaskChange}
            />

            <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Detail"
            multiline
            rows={10}
            sx={{ display: "flex" }}
            margin="normal"
            value={todos2.detail}
            // onChange={handleDetailChange}
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
                        value={todos2.status}
                        // onChange={handleStatusSet}
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
                        // onChange={handlePrioritySet}
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
                  <Button fullWidth size='large' 
                  variant="contained" 
                  // onClick={handleCreate}
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
      </Container>
    </>
  );
}