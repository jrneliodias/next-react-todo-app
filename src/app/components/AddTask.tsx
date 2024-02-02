'use client'
import React, { FormEventHandler, useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from './Modal';
import { addTodo } from '@/app/apis/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function AddTask() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      favorite: isFavorite,
      content: newTaskValue,
      color: selectedColor
    })
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh()


  }



  return (
    <div className='flex'>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-1/2 max-w-xl text-md py-2 mx-auto'>
        <span >
          ADD NEW TASK
        </span>
        <AiOutlinePlusCircle size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <label className="swap swap-flip my-auto">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox"
                onChange={() => setFavorite(!isFavorite)}
                defaultChecked={isFavorite} />

              <FaRegStar className="swap-off fill-current" size={20} />
              <FaStar className="swap-on fill-current text-yellow-500" size={20} />
            </label>
            <div className="dropdown dropdown-top my-auto">
              <div tabIndex={0} role="button" className="btn m-1 btn-sm">
                <div className={` ${selectedColor} w-4 h-4 `}></div>
              </div>
              <div tabIndex={0} className="dropdown-content z-[1] menu menu-horizontal  p-3 shadow bg-base-100 rounded-box w-28 gap-2">
                <input type="radio" name='radio-color' value={'bg-blue-400'} className="radio btn-xs btn-square btn-active bg-blue-400 checked:bg-blue-500"
                  onChange={e => setSelectedColor(e.target.value)} />
                <input type="radio" name='radio-color' value={'bg-green-400'} className="radio btn-xs btn-square btn-active bg-green-400 checked:bg-green-500"
                  onChange={e => setSelectedColor(e.target.value)} />
                <input type="radio" name='radio-color' value={'bg-red-400'} className="radio btn-xs btn-square bg-red-400  checked:bg-red-500"
                  onChange={e => setSelectedColor(e.target.value)} />
              </div>
            </div>
            <input type="text" placeholder="Type here"
              value={newTaskValue}
              onChange={e => setNewTaskValue(e.target.value)}
              className="input input-bordered w-full " />
            <button type='submit' className='btn'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
