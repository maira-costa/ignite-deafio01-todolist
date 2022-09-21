import styles from './Task.module.css'
import { Trash } from "phosphor-react";
import emptyIcon from '../assets/empty-icon.svg'

export function Task({ onCompleteTask, content, onCheckTask, onDeleteTask, id, hasTasks }) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheckTask() {
        onCheckTask(id, onCompleteTask)
    }

    if(hasTasks) {
        return (  
            <li className={styles.wrapper} id={id}>
                <label className={styles.task}>
                    <input type="checkbox" checked={onCompleteTask} onChange={handleCheckTask} />
                    <span className={styles.checkmark}></span>
                    <span className={styles.content}>{content}</span>
                </label>
                <button title='Deletar tarefa' onClick={handleDeleteTask}>
                    <Trash size={20}/>
                </button>
            </li>
        )
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