import emptyIcon from '../assets/empty-icon.svg'
import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <div>
            <header className={styles.info}>
                <div className={styles.status}>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div className={styles.status}>
                    <strong>Concluídas</strong>
                    <span>2 de 5</span>
                </div>
            </header>
            <div className={styles.noTasks}>
                <img src={emptyIcon} alt="" />
                <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
            <div className={styles.hasTasks}>
                <Task content='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
                <Task content='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
                <Task content='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
            </div>
            
        </div>
    )
}