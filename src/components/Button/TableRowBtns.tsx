import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
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

export default function TableRowBtns(props: Props) {
  const {todo} = props;
  const dispatch = useDispatch(); 

  function handleClickFlag(id: number, flag: number){    
    changeFlag(id,~flag);
    dispatch({
      type: 'CHANGE_TODOS_FLAG',
      payload: {id: id, flag: flag},
    })
  }

  return (
    <Box sx={{ display: 'flex',justifyContent: 'space-evenly' }}>        
        <Link to={`edit_todo/${todo.id}`}>
          <IconButton>
              <EditIcon ></EditIcon>
          </IconButton>
        </Link>        
        <IconButton onClick={() => handleClickFlag(todo.id,todo.flag)}>
            <DeleteIcon></DeleteIcon>
        </IconButton>        
    </Box>
  )
}
