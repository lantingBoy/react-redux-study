import {applyMiddleware,createStore} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {combineReducers} from "redux"
import fetchDataReducer from './reducers/fetchReducers'
import testDataRecuder from './reducers/testReducers'
export const store=createStore(
  combineReducers({fetch:fetchDataReducer,test:testDataRecuder}),
  applyMiddleware(thunk,logger) 
)
 