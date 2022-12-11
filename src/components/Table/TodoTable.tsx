import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import StatusButon from '../Button/StatusButon';
import PriorityButton from '../Button/PriorityButon';
import TableRowBtns from '../Button/TableRowBtns';
import { RootState } from '../../redux/configureStore';
import{ useSelector } from "react-redux";
import { Link } from 'react-router-dom';

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
type Priority = "HIGH" | "MIDDLE" | "LOW"

export default function TodoTable(): JSX.Element{
    const todosState= useSelector((state:RootState) => state.todosReducer.todos);

    const tblrow:Todo[] = todosState.reduce((result:Todo[], currentValue:Todo) => {
        if(currentValue.flag == 0){
            result.push(currentValue);
        }
        return result
    },[])
    
  return (
    <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 800 }} aria-label="simple table"
            stickyHeader
            style={{
            tableLayout: "fixed",
            }}>
            <TableHead>
                <TableRow>
                    <TableCell align="left" sx={{width: 150 }}>Task</TableCell>
                    <TableCell align="left" sx={{width: 100 }}>Status</TableCell>
                    <TableCell align="left" sx={{width: 100 }}>Priority</TableCell>
                    <TableCell align="left" sx={{width: 150 }}>Create</TableCell>
                    <TableCell align="left" sx={{width: 150 }}>Update</TableCell>
                    <TableCell align="center" sx={{width: 150 }}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {tblrow.map((todo) => (
                <TableRow
                key={todo.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="left" sx={{overflow: "hidden",textOverflow: "ellipsis",whiteSpace: "nowrap" }}>
                        <Link to={`show_todo/${todo.id}`}>
                            {todo.task}
                        </Link>   
                    </TableCell>
                    <TableCell align="left" ><StatusButon status= {todo.status}  todo={todo} /></TableCell>
                    <TableCell align="left"><PriorityButton priority= {todo.priority} todo={todo} /></TableCell>
                    <TableCell align="left">{todo.created_at}</TableCell>
                    <TableCell align="left">{todo.updated_at}</TableCell>
                    <TableCell align="center"><TableRowBtns todo={todo} /></TableCell>
                </TableRow>
                // }
            ))}
            </TableBody>
        </Table>
    </TableContainer> 
  )
}


