import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userReducer'
import { disciplineReducer } from './disciplineReducer'
import { teacherReducer } from './teacherReducer'

const rootReducer = combineReducers({
    user: userReducer,
    discipline: disciplineReducer,
    teacher: teacherReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})