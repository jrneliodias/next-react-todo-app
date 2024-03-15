import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ITaskColor } from '../../../types/tasks';
import { editTodo } from '@/app/apis/api'

interface colorPickerProps {
    task: ITaskColor,
    isFavorite: boolean,
    isCompleted: boolean,
    taskToEdit: string,

}


export default function ColorPicker({ task, isFavorite, taskToEdit, isCompleted }: colorPickerProps) {

    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState<string>(task.color);

    const handleChangeColorValue = async (colorValue: string) => {
        const newColor = colorValue
        if (newColor !== task.color) {
            setSelectedColor(newColor);

            await editTodo({
                id: task.id,
                favorite: isFavorite,
                content: taskToEdit,
                color: newColor,
                completed: isCompleted
            })
            router.refresh()
        }
    }

    return (
        <div className="dropdown dropdown-right" >
            <div tabIndex={0} role="button" className={`btn m-1 btn-sm ${isCompleted ? 'btn-disabled' : ''}`} >
                <div className={` ${selectedColor} w-4 h-4 `}></div>
            </div>
            <div tabIndex={0} className="dropdown-content dropdown-bottom z-[1] menu menu-horizontal  p-3 shadow bg-base-100 rounded-box w-28 gap-2">
                <input type="radio" name='radio-color' value={'bg-blue-400'} className="radio btn-xs btn-square btn-active bg-blue-400 checked:bg-blue-500"
                    onChange={e => handleChangeColorValue(e.target.value)} />
                <input type="radio" name='radio-color' value={'bg-green-400'} className="radio btn-xs btn-square btn-active bg-green-400 checked:bg-green-500"
                    onChange={e => handleChangeColorValue(e.target.value)} />
                <input type="radio" name='radio-color' value={'bg-red-400'} className="radio btn-xs btn-square bg-red-400  checked:bg-red-500"
                    onChange={e => handleChangeColorValue(e.target.value)} />
            </div>
        </div>

    )

}
