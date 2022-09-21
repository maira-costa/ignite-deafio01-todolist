import { Task } from "./Task";
import {EmptyTaskStack} from "./EmptyTaskStack"

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
        return <EmptyTaskStack />
    }
}