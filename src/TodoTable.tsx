import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import StatusButon from './components/StatusButon';
import PriorityButton from './components/PriorityButon';

type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  Priority;
	created_at:  String;
	updated_at:  String;
};

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

type Status = "NOT STARTED" | "DOING" | "DONE"
type Priority = "HIGH" | "MIDDLE" | "LOW"

export default function TodoTable(props:Props): JSX.Element{
    const {todos,setTodos} = props;

  return (
    <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Task</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Priority</TableCell>
                <TableCell align="left">Create</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {todos.map((todo) => (
                <TableRow
                key={todo.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">{todo.task}</TableCell>
                <TableCell align="left"><StatusButon status= {todo.status} setTodos={setTodos} todo={todo} todos={todos} /></TableCell>
                <TableCell align="left"><PriorityButton priority= {todo.priority} setTodos={setTodos} todo={todo} todos={todos} /></TableCell>
                <TableCell align="left">{todo.created_at}</TableCell>
                <TableCell align="left">{todo.updated_at}</TableCell>
                <TableCell align="left">TEST</TableCell>

                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer> 
  )
}

