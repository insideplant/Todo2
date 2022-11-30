import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton } from '@mui/material';
import { changeFlag } from '../fetch/ApiFetch';

type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  Priority;
	created_at:  String;
	updated_at:  String;
  flag: number;
};

type Status = "NOT STARTED" | "DOING" | "DONE"
type Priority = "HIGH" | "MIDDLE" | "LOW";


type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

export default function TrashTableRowBtns(props: Props) {
  const {setTodos,todo,todos} = props;

  function handleClick(id: number, flag: number){
    console.log("id:" + id + ",flag:" + flag)
    changeFlag(id,~flag);
    setTodos(
      todos.map((todo,index)=> (index === id ? Object.assign(todo,{flag: ~flag}): todo))
    );
  }

  return (
    <Box sx={{ display: 'flex',justifyContent: 'space-evenly' }}>
        <IconButton onClick={() => handleClick(todo.id -1,todo.flag)}>
            <ArrowBackIcon></ArrowBackIcon>
        </IconButton>        
    </Box>
  )
}
