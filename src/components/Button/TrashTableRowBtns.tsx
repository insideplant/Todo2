import { Button, Stack } from '@mui/material';
import { changeFlag, deleteTodo } from '../../fetch/ApiFetch';
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

  function handleClickFlag(id: number, flag: number){
    console.log(id);
    changeFlag(id,~flag);
    dispatch({
      type: 'CHANGE_TODOS_FLAG',
      payload: {id: id, flag: flag},
    })
  }
  function handleClickDelete(id: number){
    deleteTodo(id);
    dispatch({
      type: 'DELETE_TODO',
      payload: {id: id},
    })   
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="inherit" onClick={() => handleClickFlag(todo.id,todo.flag)}>
        recovery
      </Button>                 
      <Button variant="contained" color="error" onClick={() => handleClickDelete(todo.id)}>
        Delete
      </Button>                 
    </Stack>     
  )
}
