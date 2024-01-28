import React from 'react'
import { ITask } from '../../../types/tasks'
import Task from './Task'

interface TodoListProps {
  tasks: ITask[]
}

export default function TodoList({ tasks }: TodoListProps) {
  return (
    <div className='content-center mx-5'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th className=''>Favorite</th>
              <th className=''>Color</th>
              <th className=''>Tasks</th>
              <th className='text-center'>Actions</th>

            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />

            ))}


          </tbody>
        </table>
      </div>
    </div>
  )
}
