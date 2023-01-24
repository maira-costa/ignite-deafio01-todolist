import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AddNewTask } from './AddNewTask'
import {TaskStack} from './TaskStack'
import styles from './Tasks.module.css'
import { useEffect } from 'react'


export function Tasks() {
    const [tasks, setTasks] = useState([])

    const [newTaskText, setNewTaskText] = useState('')

    const [newTask, setNewTask] = useState({})

    const [completedTasks, setCompletedTasks] = useState([])

    function handleCreateNewTask(event) {
        event.preventDefault()
        setTasks([newTask, ...tasks])
        setNewTaskText('')
    }

    function handleNewTaskChange(event) {
        // event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    useEffect(
        () => {
            setNewTask({
                id: uuidv4(),
                text: newTaskText,
                isComplete: false
            })
        }, [newTaskText]
    )

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
    
    function countCompletedTasks(updatedTask) {
        const checkedTasks = updatedTask.filter(task => {
            return task.isComplete === true
        })
       
        setCompletedTasks(checkedTasks)
    }

    function deleteTask(taskToDelete) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete
        })

        setTasks(tasksWithoutDeletedOne)

        countCompletedTasks(tasksWithoutDeletedOne)
        
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
                <TaskStack 
                    tasksList={tasks} 
                    hasTasks={hasTasks} 
                    checkTask={checkTask}
                    deleteTask={deleteTask}
                />
            </ul>
        </div>
    )
}