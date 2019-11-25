import * as actionTypes from "../actions/actiontypes"
const initState = {
    
    testData:[]
}
const testDataRecuder = (state=initState,action)=>{
    
    switch (action.type) {
        case actionTypes.TEST_REDUX:
            
           return{
               ...state,
               testData:action.payload
           }
    
        default:
            return state;
    }
}

export default testDataRecuder