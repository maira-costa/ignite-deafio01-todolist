import styles from './Task.module.css'
import { Trash } from "phosphor-react";

export function Task({ id, onCompleteTask, content, onCheckTask, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheckTask() {
        onCheckTask(id, onCompleteTask)
    }
   
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
    
}