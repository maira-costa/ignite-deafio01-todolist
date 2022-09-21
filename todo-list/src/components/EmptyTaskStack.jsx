import styles from './EmptyTaskStack.module.css'
import emptyIcon from '../assets/empty-icon.svg'

export function EmptyTaskStack() {
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