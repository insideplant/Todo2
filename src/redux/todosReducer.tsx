  type Todo = {
    id: number;
    task: String;
    detail: String;
    status: Status;
    priority:  Priority;
    created_at:  String;
    updated_at:  String;
    flag: number;
  };

  type Status = "NOT STARTED" | "DOING" | "DONE"
  type Priority = "HIGH" | "MIDDLE" | "LOW"

const todosReducer = (
state:{todos: Todo[] } = {
    todos: []
}
, action: any):{todos: Todo[]} => {
    switch (action.type){
        case 'GET_ALL_TODO_DATA':
            return { ...state, todos: action.payload};
        case 'CHANGE_TODOS_STATUS':
             const resultS:Todo[] = state.todos.map((todo)=> (todo.id === action.payload.id ? 
                Object.assign(todo,{status: action.payload.status}): todo));
            return {todos: resultS }
        case 'CHANGE_TODOS_PRIORITY':
             const resultP:Todo[] = state.todos.map((todo)=> (todo.id === action.payload.id ? 
                Object.assign(todo,{priority: action.payload.priority}): todo));
            return {todos: resultP }
        case 'CHANGE_TODOS_FLAG':
             const resultF:Todo[] = state.todos.map((todo)=> (todo.id === action.payload.id ? 
                Object.assign(todo,{flag: ~action.payload.flag}): todo));
            return {todos: resultF }
        case 'UPDATE_TODO':
             const resultU:Todo[] = state.todos.map((todo)=> (todo.id === action.payload.id ? 
                Object.assign(todo,{
                    task: action.payload.task,
                    detail: action.payload.detail,
                    status: action.payload.status,
                    priority: action.payload.priority
                    }): todo));
            return {todos: resultU}
        case 'DELETE_TODO':
             const resultD:Todo[] = state.todos.filter((todo)=> {
                if(todo.id !== action.payload.id){ return todo;}
             })
            return {todos: resultD }
        default:
            return state;
    }
};

export type TodosState = ReturnType<typeof todosReducer>
export default todosReducer