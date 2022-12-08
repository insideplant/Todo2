import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { createTodo } from "../fetch/ApiFetch";
import { red } from '@mui/material/colors';

export default function Show() {

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
        <Typography variant="h3" gutterBottom> Show </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box sx={{ bgcolor: '#eeeeee', p: 2, borderRadius: '5%' }}>            
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ bgcolor: '#fafafa'}}> TITLE </Typography>
                  <Box sx={{ overflowWrap: 'break-word',overflow: 'auto',height: '50px' }}>
                    TestTestTestTestTestTestTestTestTestTestTestTestTestTest
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ bgcolor: '#fafafa' }}> DETAIL </Typography>
                  <Box sx={{ overflowWrap: 'break-word',overflow: 'auto',height: '300px' }}>
                    TestTestTestTestTestTestTestTestTestTestTestTestTestTestTe
                    stTestTestTestTestTestTestTestTestTestTestTestTestTest
                    TestTestTestTestTestTestTestTestTestTestTestTestTestTest
                    estTestTestTestTestTestTestTestTestTestTestTestTestTest
                    estTestTestTestTestTestTestTestTestTestTestTestTestTest
                    estTestTestTestTestTestTestTestTestTestTestTestTestTest
                    estTestTestTestTestTestTestTestTestTestTestTestTestTest
                    estTestTestTestTestTestTestTestTestTestTestTestTestTest
                    estTestTestTestTestTestTestTestTestTestTestTestTestTest
                    estTestTestTestTestTestTestTestTestTestTestTestTestTest
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