import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import{ useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/configureStore";

export default function Show() {

  type Status = "NOT STARTED" | "DOING" | "DONE"
  type Priority = "HIGH" | "MIDDLE" | "LOW"

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

  const params = useParams();
  const todosState= useSelector((state:RootState) => state.todosReducer.todos);
  const todo:Todo = getTodo(todosState,Number(params.showId));
 
  function getTodo(todos: Array<Todo>, id: number){
    const target = todos.find((todo:Todo)=> todo.id === id);
    if(target == null){
      throw new Error('idは存在しなければなりません');
    }
    return target;
  }

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom> Show </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box sx={{ bgcolor: '#eeeeee', p: 2, borderRadius: '5%' }}>            
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ bgcolor: '#fafafa'}}> TITLE </Typography>
                  <Box sx={{ overflowWrap: 'break-word',overflow: 'auto',height: '50px' }}>
                    {todo.task}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ bgcolor: '#fafafa' }}> DETAIL </Typography>
                  <Box sx={{ overflowWrap: 'break-word',overflow: 'auto',height: '300px' }}>
                    {todo.detail}
                  </Box>
                </Grid>
              </Grid>
            </Box>
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
                  <Button fullWidth size='large' variant="contained">
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


