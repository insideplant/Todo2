import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton } from '@mui/material';
import { changeFlag } from '../../fetch/ApiFetch';
import{ useDispatch } from "react-redux";

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
}

export default function TrashTableRowBtns(props: Props) {
  const {todo} = props;
  const dispatch = useDispatch(); 

  function handleClick(id: number, flag: number){
    changeFlag(id,~flag);
    dispatch({
      type: 'CHANGE_TODOS_FLAG',
      payload: {id: id, flag: flag},
    })
  }

  return (
    <Box sx={{ display: 'flex',justifyContent: 'space-evenly' }}>
        <IconButton onClick={() => handleClick(todo.id -1,todo.flag)}>
            <ArrowBackIcon></ArrowBackIcon>
        </IconButton>        
    </Box>
  )
}
