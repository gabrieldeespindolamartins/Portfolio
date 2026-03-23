import React from 'react'
import { WifiHigh } from 'lucide-react'
import { BatteryMedium, Gamepad  } from 'lucide-react'
import { Hour } from './Hour'
import { Projects } from './Projects.jsx'
import { Skills } from './skills.jsx'
import { Space } from 'lucide-react'
import { ArrowDown } from 'lucide-react'
import { Modal } from './Modal.jsx'


export const Screen = () => {


  return (
    <div className="flex relative flex-col justify-between items-center bg-[#E8EBE8] w-[625px] h-[344px] rounded-[5px]"> {/* Tela principal*/}

        <header className='flex items-center justify-between px-7 h-[50px] w-full '>
            <img className='h-7 w-7 rounded-full object-cover hover:scale-120 transition-transform 3000ms ease-out' src='perfil.png'/>

            <data className='flex items-center justify-between h-full w-25 text-[#888D8B]'>
              <Hour />
              <WifiHigh className='pb-1'/>
              <BatteryMedium />
            </data>
        </header>

            <Projects />
            <Skills />

        <div className='h-0.5 w-[95%]  bg-[#b8c1bd] rounded-full'></div>{/* Linha*/}

        <footer className='flex items-center justify-between px-7 h-[30px] w-full text-[#888D8B]'>
          <Gamepad />

          <div>
            <div className=''> 
            <ArrowDown className='h-4'/>
            <Space className=''/>         
            </div>
          </div>
          <p>OK</p>
        </footer>

        <Modal />
    </div>
  )
}
