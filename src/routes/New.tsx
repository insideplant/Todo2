import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";

export default function New() {
    return (
      <>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom> TODO </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField 
              fullWidth
              sx={{ display: "flex" }} 
              required id="outlined-required" 
              label="Title" 
              margin="normal"
              defaultValue="Todo"
              />

              <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Detail"
              multiline
              rows={10}
              defaultValue="Detail Information"
              sx={{ display: "flex" }}
              margin="normal"
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
                          value="a"
                          // onChange=""
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
                          value="a"
                          // onChange=""
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
              {/* </Box>           */}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }