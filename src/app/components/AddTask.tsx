'use client'
import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from './Modal';


export default function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

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
        modal
      </Modal>
    </div>
  )
}
