const initialState={
    max:10,
    offset:0
};

const paginateReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_MAX":
            return {
                ...state,
                max:action.payload,                
            };
        case "SET_OFFSET":
            return{
                ...state,
                offset:action.payload,
                
            };
        default:
            return state;  
            
    }
}
export default paginateReducer