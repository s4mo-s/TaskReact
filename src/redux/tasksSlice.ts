import { createSlice } from '@reduxjs/toolkit'
import { Task } from '@/components/todoList/interface/todoList.interface'
import moment from 'moment'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: Array<Task>,
    reducers: {
        addTask: (state, action) => {
            const formattedTimeStamp = moment(Date.now()).format('MM/DD/YY, hh:mm a')
            state.push({ text: action.payload, completed: false, time: formattedTimeStamp })
        },
        toggleTask: (state, action) => {
            const task = state[action.payload]
            task.completed = !task.completed
        },
        deleteTask: (state, action) => {
            return state.filter((_, index) => index !== action.payload)
        },
    },
})

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
