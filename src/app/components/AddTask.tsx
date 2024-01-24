import React from 'react'
import { AiOutlinePlusCircle  } from "react-icons/ai";


export default function AddTask() {
  return (
    <div className='content-center'>
        <button className='btn btn-primary w-full text-md'> ADD NEW TASK
        <AiOutlinePlusCircle  size={15}/>
        </button>
    </div>
  )
}
