import {RouterProvider} from "react-router-dom";
import Bar from "./components/Bar";
import useRouter from './useRouter';
import { styled } from '@mui/material/styles';

const Main = styled("main")(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(8,0,6)
}));

function App() {
  // routerの設定
  const routes = useRouter();
  return (
    <>
      <header>      
        <Bar/>
      </header>
      <Main>
        <RouterProvider router={routes} />
      </Main>
    </>
  );
}

export default App;
