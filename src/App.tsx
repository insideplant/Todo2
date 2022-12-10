import {RouterProvider} from "react-router-dom";
import Bar from "./components/Bar";
import useRouter from './useRouter';
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { getAllTodos } from "./fetch/ApiFetch";
import { useDispatch } from "react-redux";

const Main = styled("main")(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(8,0,6)
}));

function App() {
  // routerの設定
  const routes = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTodos().then((data)=>{
      dispatch({
        type: 'GET_ALL_TODO_DATA',
        payload: data,
      })
      
    });
  },[dispatch]);
  
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


