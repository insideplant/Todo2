import { Container, Grid, Typography } from "@mui/material";
import TodoTrashTable from "../components/Table/TodoTrashTable";
import TopLinkBtns from "../components/Button/TopLinkBtns";

export default function Trash() {
 
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
        <TodoTrashTable />
      </Container>
    </>
  );
}