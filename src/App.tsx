import {RouterProvider} from "react-router-dom";
import Bar from "./components/Bar";
import useRouter from './useRouter';
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { getAllTodos } from "./fetch/ApiFetch";

const Main = styled("main")(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(8,0,6)
}));

function App() {
  // routerの設定
  const routes = useRouter();

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
function dispatch(arg0: { type: string; payload: { id: number; task: String; detail: String; status: "NOT STARTED" | "DOING" | "DONE"; priority: "HIGH" | "MIDDLE" | "LOW"; created_at: String; updated_at: String; flag: number; }[]; }) {
  throw new Error("Function not implemented.");
}

