import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { changeStatus } from "../fetch/ApiFetch";

const STATUS = {
  not_started: "NOT STARTED",
  done: "DONE",
  doing: "DOING"
} as const;

type StatusType = typeof STATUS;
type StatusKey = keyof StatusType;
type Status = StatusType[StatusKey];

type Priority = "HIGH" | "MIDDLE" | "LOW";

type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  Priority;
	created_at:  String;
	updated_at:  String;
};

type Props = {
  status: Status,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  todo: Todo,
  todos: Todo[]
}


export default function StatusButon(props: Props) {
  // console.log(props)
  const {status, setTodos,todo,todos} = props;
  const [variant, setVariant]= useState<"text" | "outlined" | "contained" | undefined>();
  
  
  useEffect(() => {
    console.log(status);  
    return () => {
      if(status == STATUS.doing){
        setVariant("text");      
      } else if (status == STATUS.done){
        setVariant("outlined");
      } else {
        setVariant("contained");
      }
    }
  }, [])

  function handleClick(id :number,status:Status): void{    
    const test = changeStatus(id,status)
    if(status === "DOING"){
      status = "DONE";
      setVariant("outlined");
    } else if(status === "DONE"){
      status = "NOT STARTED";
      setVariant("contained");
    } else if(status === "NOT STARTED"){
      status = "DOING";
      setVariant("text");
    }

    setTodos(
      todos.map((todo,index)=> (index === id ? Object.assign(todo,{status: status}): todo))
    );
  }

  return (
    <Button variant={variant} onClick={() => handleClick(todo.id -1,status)} sx={{ width: 120, padding: 1 }}>{status}</Button>
  )
}
