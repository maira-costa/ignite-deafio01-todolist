import { Task } from "./Task";

import styles from './TaskStack.module.css'
import emptyIcon from '../assets/empty-icon.svg'

export function TaskStack({ tasksList, hasTasks, checkTask, deleteTask}) {
    if(hasTasks) {
        return tasksList.map(task => {
            return (
                <Task
                    key={task.id}
                    id={task.id}
                    onCompleteTask={task.isComplete}
                    content={task.text}
                    onCheckTask={checkTask}
                    onDeleteTask={deleteTask}
                />                           
            )
        })
    } else {
        return (
            <div className={styles.noTasks}>
                <img src={emptyIcon} alt="" />
                <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        )
    }
}