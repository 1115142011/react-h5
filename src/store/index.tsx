//这里是创建仓库
import { createStore, applyMiddleware, combineReducers } from 'redux'
import GlobalModel from './reducers/global'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const store = createStore(combineReducers({ GlobalModel }), applyMiddleware(logger, thunk))

export default store
