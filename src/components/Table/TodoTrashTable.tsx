import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import TrashTableRowBtns from '../Button/TrashTableRowBtns';
import { RootState } from '../../redux/configureStore';
import{ useSelector } from "react-redux";

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

export default function TodoTrashTable(): JSX.Element{
    const todosState= useSelector((state:RootState) => state.todosReducer.todos);
    const tblrow: Todo[] = todosState.reduce((result:Todo[], currentValue:Todo) => {
        if(currentValue.flag == -1){
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
                    <TableCell align="left" sx={{overflow: "hidden",textOverflow: "ellipsis",whiteSpace: "nowrap" }}>{todo.task}</TableCell>
                    <TableCell align="left">{todo.created_at}</TableCell>
                    <TableCell align="left">{todo.updated_at}</TableCell>
                    <TableCell align="left"><TrashTableRowBtns todo={todo} /></TableCell>
                </TableRow>
                // }
            ))}
            </TableBody>
        </Table>
    </TableContainer> 
  )
}
