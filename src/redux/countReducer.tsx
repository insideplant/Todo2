const initialState = {
    count: 50,
}

const countReducer = (state = initialState, action:any) => {
    switch (action.type){
        case 'INCREASE_COUNT':
            return {
                count: state.count + 1,
            };
        case 'DECREASE_COUNT':
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }    
};

export type CountState = ReturnType<typeof countReducer>
export default countReducer;