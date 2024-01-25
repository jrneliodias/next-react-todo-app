import React from 'react'
interface modalOpenProps {
    modalOpen: boolean,
    setModalOpen : (open:boolean)=> boolean|void,
    children: React.ReactNode
}


function Modal({modalOpen,setModalOpen,children}:modalOpenProps) {
    return (

        <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open":""}`}>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button  onClick={()=> setModalOpen(false)}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {children}
            </div>
        </dialog>
    )
}

export default Modal