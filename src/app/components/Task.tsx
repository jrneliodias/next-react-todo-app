'use client'
import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { ITaskColor } from '../../../types/tasks'
import { FiEdit, FiTrash } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '@/app/apis/api'
import { FaRegStar, FaStar } from 'react-icons/fa'
import ColorPicker from './colorPicker'


interface TaskProps {
    task: ITaskColor
}

export default function Task({ task }: TaskProps) {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openDeleteModal, setDeleteModal] = useState<boolean>(false);
    const [isFavorite, setFavorite] = useState<boolean>(task.favorite);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.content);



    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            favorite: false,
            content: taskToEdit,
            color: task.color
        })

        setOpenModalEdit(false);
        router.refresh()


    }

    const handleSubmitDeleteTask = async (id: string) => {
        await deleteTodo(id);
        setDeleteModal(false)
        router.refresh()
    }


    const handleChangeFavoriteValue = async (e: ChangeEvent<HTMLInputElement>) => {
        const favoriteChange = e.target.checked
        setFavorite(favoriteChange)

        await editTodo({
            id: task.id,
            favorite: favoriteChange,
            content: taskToEdit,
            color: task.color
        })
        router.refresh()
    }

<<<<<<< HEAD
=======
    const handleChangeColorValue = async (colorValue: string) => {
        const newColor = colorValue
        if (newColor !== task.color) {
            setSelectedColor(newColor);

            await editTodo({
                id: task.id,
                favorite: isFavorite,
                content: taskToEdit,
                color: newColor
            })
            router.refresh()
        }
    }
>>>>>>> 140a4bdeba6c1e090cc4a11bed15348d65bad0bc


    return (

        <tr key={task.id} className={`hover`}>
            <td>

                <label className="swap swap-flip">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox"
                        onChange={handleChangeFavoriteValue}
                        defaultChecked={isFavorite} />

                    <FaRegStar className="swap-off fill-current" size={20} />
                    <FaStar className="swap-on fill-current text-yellow-500" size={20} />
                </label>
            </td>
            <td className=''>
                <ColorPicker task={task} isFavorite={isFavorite} taskToEdit={taskToEdit} />
            </td>
            <td className='w-full'>{task.content}</td>

            <td className='flex gap-5'>
                <FiEdit
                    onClick={() => setOpenModalEdit(true)}
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
                <FiTrash onClick={() => setDeleteModal(true)} cursor='pointer' size={20} className='text-red-500' />
                <Modal modalOpen={openDeleteModal} setModalOpen={setDeleteModal}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className="font-bold text-lg">Are you sure to delete?</h3>
                        <div className="modal-action">
                            <button onClick={() => handleSubmitDeleteTask(task.id)} type='submit' className='btn'>Delete</button>
                        </div>
                    </form>
                </Modal>
            </td>
        </tr>
    )
}

