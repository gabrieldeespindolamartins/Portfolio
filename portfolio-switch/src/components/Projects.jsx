import React from 'react'

const projetos = [
  {id: 1, name: 'mcDonalds', Image: '/mcDonalds.png', url: 'https://clone-mc-donalds-apvudl6lt-gabriel14em-9376s-projects.vercel.app/'},
  {id: 2, name: 'FrontEndMentor', Image: '/frontendmentor.png', url: 'https://gabrieldeespindolamartins.github.io/Front-End-Mentor-Projects/' },
  {id: 3, name: 'Task Manager', Image: 'taskManager.png', url: 'https://task-manager-8qkujcb7l-gabriel14em-9376s-projects.vercel.app/' }
]

export const Projects = () => {
    
  return (
    <div className="w-full"> {/* container */}
        <div className='flex gap-2 mx-15'> {/* trilho */}
        
            {projetos.map(element => ( 
            <a 
            href={element.url}
            onClick={() => console.log('clicou')}
            key={element.id}
            className="flex transition-transform duration-300 ease-out hover:scale-105 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-[#D9D9D9] w-30 h-30"
            >

              <img src={element.Image} />
            </a>
          ))}
        </div>

    </div>
  )
}
