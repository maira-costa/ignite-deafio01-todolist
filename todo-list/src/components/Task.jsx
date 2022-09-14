import styles from './Task.module.css'
import { Trash } from "phosphor-react";

export function Task({ content }) {
    return (
        <form className={styles.task}>
            <input type="radio" id="task"/>
            <label htmlFor="task">{content}</label>
            <Trash size={24}/>
        </form>
    )
}