import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import StatusButon from '../Button/StatusButon';
import PriorityButton from '../Button/PriorityButon';
import TrashTableRowBtns from '../TrashTableRowBtns';

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
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

type Status = "NOT STARTED" | "DOING" | "DONE"
type Priority = "HIGH" | "MIDDLE" | "LOW"

export default function TodoTrashTable(props:Props): JSX.Element{
    const {todos,setTodos} = props;


    const tblrow = todos.reduce((result:Todo[], currentValue:Todo) => {
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
                    <TableCell align="left" sx={{width: 100 }}>Status</TableCell>
                    <TableCell align="left" sx={{width: 100 }}>Priority</TableCell>
                    <TableCell align="left" sx={{width: 150 }}>Create</TableCell>
                    <TableCell align="left" sx={{width: 150 }}>Update</TableCell>
                    <TableCell align="left" sx={{width: 150 }}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {tblrow.map((todo) => (
                // if(todo.flag == 1){
                <TableRow
                key={todo.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="left" sx={{overflow: "hidden",textOverflow: "ellipsis",whiteSpace: "nowrap" }}>{todo.task}</TableCell>
                    <TableCell align="left" ><StatusButon status= {todo.status} setTodos={setTodos} todo={todo} todos={todos} /></TableCell>
                    <TableCell align="left"><PriorityButton priority= {todo.priority} setTodos={setTodos} todo={todo} todos={todos} /></TableCell>
                    <TableCell align="left">{todo.created_at}</TableCell>
                    <TableCell align="left">{todo.updated_at}</TableCell>
                    <TableCell align="left"><TrashTableRowBtns setTodos={setTodos} todo={todo} todos={todos}/></TableCell>
                </TableRow>
                // }
            ))}
            </TableBody>
        </Table>
    </TableContainer> 
  )
}

