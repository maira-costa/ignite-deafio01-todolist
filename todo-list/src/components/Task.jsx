import styles from './Task.module.css'
import { Trash } from "phosphor-react";

export function Task({ content }) {
    return (  
        <div className={styles.wrapper}>
            <label className={styles.task}>
                <input type="checkbox"/>
                <span className={styles.checkmark}></span>
                <span className={styles.content}>{content}</span>
            </label>
            <button title='Deletar tarefa'>
                <Trash size={20}/>
            </button>
        </div>
    )
}