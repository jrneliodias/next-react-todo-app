'use client'
import React, { ChangeEvent, FormEventHandler, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import { ITaskColor } from '../../../types/tasks'
import { FiEdit, FiTrash } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '@/app/apis/api'
import { FaRegStar, FaStar } from 'react-icons/fa'
import ColorPicker from './ColorPicker'


interface TaskProps {
    task: ITaskColor
}

export default function Task({ task }: TaskProps) {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [editingTask, setEditingTask] = useState<boolean>(false);
    const [openDeleteModal, setDeleteModal] = useState<boolean>(false);
    const [isFavorite, setFavorite] = useState<boolean>(task.favorite);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.content);
    const [isChecked, setChecked] = useState<boolean>(task.completed);

    let editRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        let mouseClickOutsideHandler = (event: MouseEvent) => {
            if (!editRef.current!.contains(event.target as Node)) {
                setEditingTask(false)
            }
        }
        document.addEventListener("mousedown", mouseClickOutsideHandler)

        return () => {
            document.removeEventListener('mousedown', mouseClickOutsideHandler)
        }
    })



    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            favorite: false,
            content: taskToEdit,
            color: task.color,
            completed: task.completed
        })

        setOpenModalEdit(false);
        router.refresh()


    }

    const handleEditTodo: React.KeyboardEventHandler<HTMLInputElement> = async (event) => {

        if (event.key === 'Enter') {
            setEditingTask(false)
            await editTodo({
                id: task.id,
                favorite: task.favorite,
                content: taskToEdit,
                color: task.color,
                completed: task.completed
            })

            router.refresh()

        }

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
            color: task.color,
            completed: task.completed
        })
        router.refresh()
    }
    const handleChangeCheckboxValue = async (e: ChangeEvent<HTMLInputElement>) => {

        const checkboxValue = e.target.checked

        setChecked(checkboxValue)

        await editTodo({
            id: task.id,
            favorite: task.favorite,
            content: taskToEdit,
            color: task.color,
            completed: checkboxValue
        })
        router.refresh()


    }



    return (

        <tr key={task.id} className={`hover`}>
            <td>
                <label className="label cursor-pointer ">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={isChecked}
                        onChange={(event) => handleChangeCheckboxValue(event)} />
                    <div className={`rounded-md`}></div>
                </label>
            </td>
            <td>

                <label className="swap swap-flip">
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

            <td className='w-full'>
                <button
                    onClick={() => setEditingTask(true)}
                    className={` ${editingTask ? 'hidden' : ''}`}>
                    {task.content}
                </button>
                <input
                    ref={editRef}
                    type="text"
                    placeholder="Type here"
                    value={taskToEdit}
                    onKeyDown={handleEditTodo}
                    onChange={e => setTaskToEdit(e.target.value)}
                    className={`input  input-ghost p-1 w-full ${editingTask ? '' : 'hidden'}`}
                />
            </td>

            <td className=''>
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

