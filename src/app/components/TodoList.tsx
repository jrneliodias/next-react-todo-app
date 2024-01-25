import React from 'react'
import { ITask } from '../../../types/tasks'

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
              <tr key={task.id} className="hover">
                <td>{task.text}</td>
                <td>Quality Control Specialist</td>
              </tr>

            )

            )}
            {/* row 1 */}

          </tbody>
        </table>
      </div>
    </div>
  )
}
