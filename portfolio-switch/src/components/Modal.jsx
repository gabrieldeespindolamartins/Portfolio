import React from 'react'
import { useState } from 'react'

export const Modal = () => {
    const [open, setOpen] = useState(false)

  return (
    <div >
        {open && (
            <div className='inset-0 absolute bg-black/75'>
                <p onClick={() => setOpen(false)}>funcionou</p>
            </div>
        )}
        <p onClick={() => setOpen(true)}> Modal</p>
    </div>
  )
}
