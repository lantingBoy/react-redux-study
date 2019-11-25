import * as actionTypes from "../actions/actiontypes"

const initState = {
    isFetching:false,
    data:[]
}

const fetchDataReducer=(state=initState,action)=>{
   
    switch (action.type){
        case actionTypes.FETCH_DATA_START:
            return{
                ...state,
                isFetching:true
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return{
                ...state,
                isFetching:false,
                data:action.data.data
            }
        case actionTypes.FETCH_DATA_FAIL:
            return{
                ...state,
                isFetching:false
            }
        default:
            return state;
    }
}

export default fetchDataReducer