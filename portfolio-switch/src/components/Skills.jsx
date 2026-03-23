import React from 'react'

const skills = [
  {id: 1, Image: '/React.png'},
  {id: 2, Image: '/html.png'},
  {id: 3, Image: 'css.png'},
  {id: 4, Image: 'js.png'}
]
export const Skills = () => {
  return (
        <div className='flex w-full h-15 justify-center items-center gap-4'> {/* Skills*/} 

          {skills.map(element => ( 
            <div 
            key={element.id}
            >

              <img src={element.Image}  className='hover:scale-130 h-10 w-10 bg-[#F3F5F3]  rounded-full object-cover p-1 transition-transform 3000ms ease-out' />
                    
            </div>
          ))}
        </div>
  )
}
