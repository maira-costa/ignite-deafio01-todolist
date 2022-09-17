import { useState } from 'react'
import emptyIcon from '../assets/empty-icon.svg'
import { AddNewTask } from './AddNewTask'
import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks() {
    const [tasks, setTasks] = useState([])

    const [newTaskText, setNewTaskText] = useState('')
   
    function handleCreateNewTask() {
        event.preventDefault()
        setTasks([...tasks, newTaskText])
        setNewTaskText('')
    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function deleteTask(taskToDelete) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task != taskToDelete
        })

        setTasks(tasksWithoutDeletedOne)
    }

    const [checkedState, setCheckedState] = useState(
        new Array(tasks.length).fill(false)
    )

    const [completedTasks, setCompletedTasks] = useState([])

    function checkTask(position) {
        console.log(checkedState)
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        )
        setCheckedState(updatedCheckedState)
        
        const checkedTasks = updatedCheckedState.filter(item => {
            return item ===true
        })

        setCompletedTasks(checkedTasks)
    }

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
            <div className={styles.noTasks}>
                <img src={emptyIcon} alt="" />
                <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
            <div className={styles.hasTasks}>
                {tasks.map((task, index) => {
                    return <Task
                                key={task}
                                index={index}
                                content={task}
                                checked={checkedState}
                                onCheckTask={checkTask}
                                onDeleteTask={deleteTask}
                           />            
                })}
            </div>
        </div>
    )
}