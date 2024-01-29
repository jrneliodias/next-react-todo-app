'use client'
import React, { ChangeEvent, useState } from 'react'
import { ITask, ITaskColor } from '../../../types/tasks'
import Task from './Task'
import { useRouter } from 'next/navigation'

interface TodoListProps {
  tasks: ITaskColor[]
}

export default function TodoList({ tasks }: TodoListProps) {
  // Sort the data based on the 'favorite property
  const sortedTasks = [...tasks].sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1))
  const [filterFavorite, setFilterFavorite] = useState<boolean>(false);
  const router = useRouter();

  const handleChangeFavoriteFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
    const filterFavorite = e.target.checked
    setFilterFavorite(filterFavorite)
    
}

const filteredTodos = filterFavorite ? sortedTasks.filter((todo)=> todo.favorite) : sortedTasks

  return (
    <div className='content-center mx-5'>
      <div className="form-control">
        <label className=" flex gap-2 items-center cursor-pointer">
          <input type="checkbox" onChange={handleChangeFavoriteFilterValue} defaultChecked={filterFavorite} className="checkbox checkbox-secondary" />
          <span className="label-text "> Favoritos </span>
        </label>
      </div>
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
            {filteredTodos.map((task) => (
              <Task key={task.id} task={task} />

            ))}


          </tbody>
        </table>
      </div>
    </div>
  )
}
