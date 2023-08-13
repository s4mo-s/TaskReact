import { useAppDispatch } from '@/redux/store'
import { deleteTask, toggleTask } from '@/redux/tasksSlice'
import { Task } from '../todoList/interface/todoList.interface'
import { Box, Checkbox, IconButton, ListItem } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { red } from '@mui/material/colors'

type Props = {
    task: Task
    index: number
}

export const TodoItem = ({ task, index }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <ListItem disablePadding sx={{ bgcolor: 'background.paper' }}>
            <Checkbox checked={task.completed} onChange={() => dispatch(toggleTask(index))} />
            <Box sx={{ width: '100%', maxWidth: '250px', overflow: 'auto' }}>
                <span style={task.completed ? { textDecoration: 'line-through' } : undefined}>{task.text}</span>
            </Box>
            <IconButton onClick={() => dispatch(deleteTask(index))}>
                <DeleteOutlineIcon sx={{ color: red[600] }} />
            </IconButton>
            <time>{task.time}</time>
        </ListItem>
    )
}
