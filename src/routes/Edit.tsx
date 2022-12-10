import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import TopLinkBtns from "../components/Button/TopLinkBtns";
import { useParams, useNavigate } from 'react-router-dom';
import{ useSelector} from "react-redux";
import { RootState } from "../redux/configureStore";


export default function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const todosState= useSelector((state:RootState) => state.todosReducer.todos);
  const todoState:Todo = todosState[Number(params.editId) -1];
  
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
            value={todoState.task}
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
            value={todoState.detail}
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
                        value={todoState.status}
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
                        value={todoState.priority}
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