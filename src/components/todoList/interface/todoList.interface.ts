export interface RootState {
    tasks: Task[]
}

export interface Task {
    text: string
    completed: boolean
    time: string
}
