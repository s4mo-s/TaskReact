import { useAppSelector } from '@/redux/store'
import { RootState } from '@/redux/rootReducer'
import { Box, List } from '@mui/material'
import { TodoAdd } from '../todoAdd/todoAdd'
import { TodoItem } from '../todoItem/TodoItem'

export const TodoList = () => {
    const list = useAppSelector((state: RootState) => state.tasks)

    const filteredList = list ? list.filter((task) => task.completed === true) : []

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <h2>Things to do..</h2>
                <TodoAdd />
                <List>
                    {list.map((task, index) => (
                        <TodoItem key={index} task={task} index={index} />
                    ))}
                </List>
                <h3>
                    Completed: {filteredList.length} / {list.length}
                </h3>
            </Box>
        </Box>
    )
}
