import styles from './Task.module.css'
import { Trash } from "phosphor-react";

export function Task({ content, checked, index, onCheckTask, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask(content)
    }

    function handleCheckTask() {
        onCheckTask(index)
    }

    return (  
        <div className={styles.wrapper}>
            <label className={styles.task}>
                <input type="checkbox" checked={checked[index]} onChange={handleCheckTask} />
                <span className={styles.checkmark}></span>
                <span className={styles.content}>{content}</span>
            </label>
            <button title='Deletar tarefa' onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
    )
}