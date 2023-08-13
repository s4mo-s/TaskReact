import { useState } from 'react'
import { useAppDispatch } from '@/redux/store'
import { addTask } from '@/redux/tasksSlice'
import { Box, IconButton, TextField } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'

export const TodoAdd = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useAppDispatch()

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    function handleAdd() {
        if (inputValue.trim() === '') {
            setInputValue('')
            return
        }

        dispatch(addTask(inputValue))
        setInputValue('')
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') handleAdd()
    }

    return (
        <Box>
            <TextField
                label="add task.."
                variant="outlined"
                size="small"
                type="text"
                autoFocus
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
            />
            <IconButton onClick={handleAdd}>
                <AddCircleIcon color="primary" />
            </IconButton>
        </Box>
    )
}
