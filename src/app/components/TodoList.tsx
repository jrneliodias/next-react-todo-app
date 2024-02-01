'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ITaskColor } from '../../../types/tasks'
import Task from './Task'
import { useRouter } from 'next/navigation'
import { FaStar } from 'react-icons/fa'

interface TodoListProps {
  tasks: ITaskColor[]
}

export default function TodoList({ tasks }: TodoListProps) {
  const router = useRouter()
  
  // Sort the data based on the 'favorite property
  const [selectFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<ITaskColor[]>([]);
  const [taskOriginal, setTaskOriginal] = useState<ITaskColor[]>([]);
  const [filterFavorite, setFilterFavorite] = useState<boolean>(false);

  const filters = ["bg-red-400", "bg-green-400", "bg-blue-400"];

  
  
  
  const handleChangeFavoriteFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
    const filterFavorite = e.target.checked
    setFilterFavorite(filterFavorite)
    
  }

  const handleFilterButtonClick = (selectColor: string) => {
    
    if (selectFilters.includes(selectColor)) {
      const filters = selectFilters.filter((el) => el !== selectColor)
      setSelectedFilters(filters);
      
    } else {
      setSelectedFilters([...selectFilters, selectColor]);
      
    }
  }
  
  useEffect(() => {
    // Atualiza as tarefas originais ao receber novas do banco de dados
    const sortedTasks = [...tasks].sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1))
    setTaskOriginal(sortedTasks)
  }, [tasks])
  useEffect(() => {

    const filterTasks = () => {
      let tempItems: ITaskColor[] = [...taskOriginal]
      if (selectFilters.length > 0) {
        tempItems = tempItems.filter((tasks) => selectFilters.includes(tasks.color))

      }

      if(filterFavorite){
        tempItems = tempItems.filter((task)=> task.favorite)
      }

      setFilteredTasks(tempItems)



    }

    filterTasks()

  }, [selectFilters,filterFavorite,taskOriginal])



  // const filteredTodos = filterFavorite ? sortedTasks.filter((todo) => todo.favorite) : sortedTasks



  return (
    <div className='content-center mx-5'>
      <div className="form-control flex-row gap-4  bg-base-200 my-2 p-2 px-4 rounded-md ">
        <label className='my-auto'>Filtros: </label>

        {filters.map((color, idx) => (
          <div key={idx} className="form-control">
            <label className="label cursor-pointer gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                onClick={() => handleFilterButtonClick(color)} />
              <div className={`${color} size-5 rounded-md`}></div>
            </label>
          </div>

        ))}

        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <input type="checkbox" className="checkbox checkbox-primary" defaultChecked={filterFavorite} />
            <FaStar className="swap-on fill-current text-yellow-500" size={20} />
          </label>
        </div>
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
            {filteredTasks.map((task) => (
              <Task key={task.id} task={task} />

            ))}


          </tbody>
        </table>
      </div>
    </div>
  )
}
