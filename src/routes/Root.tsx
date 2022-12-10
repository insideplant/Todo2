import { Container, Grid } from "@mui/material";
import TodoTable from "../components/Table/TodoTable";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import TopLinkBtns from "../components/Button/TopLinkBtns";

export default function Root() { 
   
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
        <TodoTable />
      </Container>
    </>
  );
}
