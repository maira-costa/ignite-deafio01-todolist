import styles from './AddNewTask.module.css'
import { PlusCircle } from "phosphor-react";

export function AddNewTask({newTaskText, handleCreateNewTask, handleNewTaskChange }) {

    return (
        <form onSubmit={handleCreateNewTask} className={styles.newTasks}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                value={newTaskText}
                onChange={handleNewTaskChange}
                required
            />
            <button type="submmit">Criar <PlusCircle size={16}/></button>
        </form>
    )
}