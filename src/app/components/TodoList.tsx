import React from 'react'
import { ITask, ITaskColor } from '../../../types/tasks'
import Task from './Task'

interface TodoListProps {
  tasks: ITaskColor[]
}

export default function TodoList({ tasks }: TodoListProps) {
// Sort the data based on the 'favorite property
const sortedTasks = [...tasks].sort((a,b)=> (a.favorite === b.favorite? 0: a.favorite? -1:1))

  return (
    <div className='content-center mx-5'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th className=''></th>
              <th className=''></th>
              <th className=''>Tasks</th>
              <th className='text-center'>Actions</th>

            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task) => (
              <Task key={task.id} task={task} />

            ))}


          </tbody>
        </table>
      </div>
    </div>
  )
}
