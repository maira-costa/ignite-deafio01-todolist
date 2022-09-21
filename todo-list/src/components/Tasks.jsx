import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AddNewTask } from './AddNewTask'
import { Task } from './Task'
import styles from './Tasks.module.css'


export function Tasks() {
    const [tasks, setTasks] = useState([
        // {
        //     id: uuidv4(),
        //     text: 'Comprar maçã',
        //     isComplete: false
        // },
        // {
        //     id: uuidv4(),
        //     text: 'Comprar laranja',
        //     isComplete: false
        // }
    ])
    const [newTask, setNewTask] = useState({})

    const [newTaskText, setNewTaskText] = useState('')

    const [completedTasks, setCompletedTasks] = useState([])

    function handleCreateNewTask() {
        event.preventDefault()
    
        setTasks([newTask, ...tasks])

        setNewTaskText('')
    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
        setNewTask({
            id: uuidv4(),
            text: newTaskText,
            isComplete: false
        })
    }

    function checkTask(checkedTaskId) {
        const updatedCheckedState = tasks.map(task => {
            if (task.id === checkedTaskId) {
                return {...task, isComplete: !task.isComplete};
            }
            return task;
        })
           
        setTasks(updatedCheckedState)   
        
        countCompletedTasks(updatedCheckedState)

    }

    function deleteTask(taskToDelete) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete
        })

        setTasks(tasksWithoutDeletedOne)

        countCompletedTasks(tasksWithoutDeletedOne)
        
    }
    
    function countCompletedTasks(updatedTask) {
        const checkedTasks = updatedTask.filter(task => {
            return task.isComplete === true
        })
       
        setCompletedTasks(checkedTasks)
    }

    const hasTasks = tasks.length > 0

    return (
        <div>
            <AddNewTask 
                newTaskText={newTaskText} 
                handleCreateNewTask={handleCreateNewTask}
                handleNewTaskChange={handleNewTaskChange} 
            />
            <div className={styles.info}>
                <div className={styles.status}>
                    <strong>Tarefas criadas</strong>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.status}>
                    <strong>Concluídas</strong>
                    <span>{completedTasks.length} de {tasks.length}</span>
                </div>
            </div>
            <ul className={styles.tasksWrapper}>
                {tasks.map(task => {
                        return (
                            <Task
                                key={task.id}
                                id={task.id}
                                onCompleteTask={task.isComplete}
                                content={task.text}
                                onCheckTask={checkTask}
                                onDeleteTask={deleteTask}
                                hasTasks={hasTasks}
                            />                           
                        )
                })}
            </ul>
        </div>
    )
}