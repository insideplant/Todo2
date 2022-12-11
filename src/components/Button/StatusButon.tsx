import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { changeStatus } from "../../fetch/ApiFetch";
import{ useDispatch } from "react-redux";

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
  flag: number;
};

type Props = {
  status: Status,
  todo: Todo,
}


export default function StatusButon(props: Props) {
  const {status, todo} = props;
  const [variant, setVariant]= useState<"text" | "outlined" | "contained" | undefined>();
  const dispatch = useDispatch();
  
  
  useEffect(() => {
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
    changeStatus(id,status)

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

    dispatch({
        type: 'CHANGE_TODOS_STATUS',
        payload: {id: id, status: status},
      }
    )
  }

  return (
    <Button variant={variant} onClick={() => handleClick(todo.id,status)} sx={{ width: 120, padding: 1 }}>{status}</Button>
  )
}
