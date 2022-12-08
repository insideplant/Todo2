const todosReducer = (
state = {
    todos: []
}
, action: any) => {
    switch (action.type){
        case 'GET_ALL_TODO_DATA':
            return { ...state, todos: action.payload};
        default:
            return state;
    }
};

export type TodosState = ReturnType<typeof todosReducer>
export default todosReducer