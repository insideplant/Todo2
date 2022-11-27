import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
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

export default function TableRowBtns(props: Props) {
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
        <Link to={`/edit_todo`}>
          <IconButton>
            <AddBoxIcon color="primary"></AddBoxIcon>
          </IconButton>
        </Link>
        <IconButton onClick={() => handleClick(todo.id -1,todo.flag)}>
            <DeleteIcon></DeleteIcon>
        </IconButton>        
    </Box>
  )
}
