import { Header } from '@/components/header/Header'
import { TodoList } from '@/components/todoList/TodoList'

export const Dashboard = () => {
    return (
        <>
            <Header />
            <h1 style={{ textAlign: 'center' }}>DashBoard</h1>
            <TodoList />
        </>
    )
}
