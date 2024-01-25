import React from 'react'
import { ITask } from '../../../types/tasks'
import Task from './Task'

interface TodoListProps {
  tasks: ITask[]
}

export default function TodoList({tasks}:TodoListProps) {
  return (
    <div className='content-center'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Taks</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
                <Task key = {task.id} task= {task}/>

            )

            )}
            {/* row 1 */}

          </tbody>
        </table>
      </div>
    </div>
  )
}
