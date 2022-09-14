import styles from './NewTasks.module.css'
import { PlusCircle } from "phosphor-react";

export function NewTasks() {
    return (
        <form className={styles.newTasks}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
            />
            <button type="submmit">Criar <PlusCircle size={16}/></button>
        </form>
    )
}