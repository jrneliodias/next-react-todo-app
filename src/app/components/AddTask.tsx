'use client'
import React, { FormEventHandler, useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from './Modal';


export default function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue,setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(newTaskValue)
    setNewTaskValue("");

  }

  return (
    <div className='flex content-center'>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full text-md py-2'>
        <span >
          ADD NEW TASK
        </span>
        <AiOutlinePlusCircle size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input type="text" placeholder="Type here" 
            value={newTaskValue}
            onChange={e=> setNewTaskValue(e.target.value)}
            className="input input-bordered w-full " />
            <button type='submit' className='btn'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
