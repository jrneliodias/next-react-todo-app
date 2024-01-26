'use client'
import React, { FormEventHandler, useState } from 'react'
import { ITask } from '../../../types/tasks'
import { FiEdit, FiTrash } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { editTodo } from '@/apis/api'

interface TaskProps {
    task: ITask
}

function Task({ task }: TaskProps) {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text)
   
    
    const handleSubmitEditTodo:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
          id:task.id,
          text:taskToEdit,
        })
        setTaskToEdit("");
        setOpenModalEdit(false);
        router.refresh()
    
    
      }
    
    return (
        <tr key={task.id} className="hover ">
            <td className='w-full'>{task.text}</td>
            <td className='flex gap-5'>
                <FiEdit
                    onClick={()=> setOpenModalEdit(true)}
                    cursor='pointer' size={20} />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className="font-bold text-lg">Edit the task</h3>
                        <div className="modal-action">
                            <input type="text" placeholder="Type here"
                                value={taskToEdit}
                                onChange={e => setTaskToEdit(e.target.value)}
                                className="input input-bordered w-full " />
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
                <FiTrash cursor='pointer' size={20} className='text-red-500' />
            </td>
        </tr>
    )
}

export default Task