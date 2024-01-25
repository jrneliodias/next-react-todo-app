import React from 'react'
import { ITask } from '../../../types/tasks'

interface TaskProps{
    task:ITask
}

function Task({task}:TaskProps) {
    return (
        <tr key={task.id} className="hover">
            <td>{task.text}</td>
            <td>Quality Control Specialist</td>
        </tr>
    )
}

export default Task