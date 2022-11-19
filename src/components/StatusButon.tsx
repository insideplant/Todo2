import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';

const STATUS = {
  not_started: "NOT STARTED",
  done: "DONE",
  doing: "DOING"
} as const;

type StatusType = typeof STATUS;
type StatusKey = keyof StatusType;
type Status = StatusType[StatusKey];

type Todo = {
	id: number;
	task: String;
	status: String;
	priority:  String;
	created_at:  String;
	updated_at:  String;
};

type Props = {
  status: Status,
  handleClick: any,
  todo: Todo
}


export default function StatusButon(props: Props) {
  // console.log(props)
  const {status, handleClick,todo} = props;
  const [variant, setVariant]= useState<"text" | "outlined" | "contained" | undefined>();
  
  useEffect(() => {  
    return () => {
      if(status == STATUS.doing){
        setVariant("contained");      
      } else if (status == STATUS.done){
        setVariant("outlined");
      } else {
        setVariant("contained");
      }
    }
  }, [status])

  return (
    <Button variant={variant} onClick={() => handleClick(todo.id -1,status)}>{status}</Button>
  )
}
