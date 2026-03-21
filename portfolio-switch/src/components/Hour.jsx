import React from 'react'
import { useState, useEffect } from 'react'

export const Hour = () => {
    const [hora, setHora] = useState(new Date())

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date())
        }, 1000)
        return () => clearInterval(intervalo)
    }, [])

  return (
    <p className='font-medium'>{hora.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit'})}</p>
  )
}
