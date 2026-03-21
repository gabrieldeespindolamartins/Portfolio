import React from 'react'

const projetos = [
  {id: 1, name: 'mcDonalds', Image: '/mcDonalds.png', url: 'https://clone-mc-donalds-apvudl6lt-gabriel14em-9376s-projects.vercel.app/'},
  {id: 2, name: 'FrontEndMentor', Image: '/frontendmentor.png', url: 'https://gabrieldeespindolamartins.github.io/Front-End-Mentor-Projects/' }
]

export const Projects = () => {
    
  return (
    <div className="w-full"> {/* container */}
      
        <div className='flex gap-2 mx-15'> {/* trilho */}
        
            {projetos.map(element => ( 
            <div 
            key={element.id}
            className="flex hover:scale-105 bg-[#D9D9D9] w-30 h-30"
            >

              <img src={element.Image} />
            </div>
          ))}
        </div>

    </div>
  )
}
