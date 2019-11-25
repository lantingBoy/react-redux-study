import * as actionTypes from './actiontypes'
import axios from 'axios'

const fetchDataStart = ()=>({
    type:actionTypes.FETCH_DATA_START
})

const fetchDataSuccess = data =>({
    type:actionTypes.FETCH_DATA_SUCCESS,
    data
})

const fetchDataFail = data =>({
    type:actionTypes.FETCH_DATA_FAIL,
    data
})

export const testRedux = data =>({
    type:actionTypes.TEST_REDUX,
    payload:data
})

export const loadData = ()=>dispatch =>{
    dispatch(fetchDataStart)
    return axios
    .get('https://api.github.com/users/burczu/repos')
    .then(data=>dispatch(fetchDataSuccess(data)))
    .catch(err=>dispatch(fetchDataFail(err.response.data)))
}

