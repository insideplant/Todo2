import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import StatusButon from './components/StatusButon';

type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  String;
	created_at:  String;
	updated_at:  String;
};

type Props = {
    todos: Todo[],
    handleClick: (id: number, status: String) => void
}

type Status = "NOT STARTED" | "DOING" | "DONE"


export default function TodoTable(props:Props): JSX.Element{
    const {todos,handleClick} = props;



  return (
    <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="right">Task</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Priority</TableCell>
                <TableCell align="right">Create</TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {todos.map((todo) => (
                <TableRow
                key={todo.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="right">{todo.task}</TableCell>
                <TableCell align="right"><StatusButon status= {todo.status}  handleClick={handleClick} todo={todo} /></TableCell>
                <TableCell align="right">{todo.priority}</TableCell>
                <TableCell align="right">{todo.created_at}</TableCell>
                <TableCell align="right">{todo.updated_at}</TableCell>
                <TableCell align="right">TEST</TableCell>

                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer> 
  )
}

