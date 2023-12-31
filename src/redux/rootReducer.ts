import { combineReducers } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'

export const rootReducer = combineReducers({ tasks: tasksReducer })

export type RootState = ReturnType<typeof rootReducer>
