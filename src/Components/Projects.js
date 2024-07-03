import BookImg from '../assets/book.jpg'
import ChatImg from '../assets/Chatapp.webp'
import Shoping from '../assets/shoping.jpg'
export default function Projects(){
         
      const config={
        Projects:[
          {
            image: BookImg,
            description: 'Bookstore management, build with springboot',
            link: 'https://github.com/iamAKASHs'
          },
          {
            image: ChatImg,
            description: 'Bookstore management, build with springboot',
            link: 'https://github.com/iamAKASHs'
          },
          {
            image: Shoping,
            description: 'Bookstore management, build with springboot',
            link: 'https://github.com/iamAKASHs'
          }
        ]
      }
 
  
    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" id='projects'>
        <div  className="w-full">
        <div className="flex flex-col px-10">
           <h1 className="text-4xl pl-1 text-white border-b-2 mb-2 w-[180px] font-bold">Projects</h1>
          <p className='pt-5'>This projects are my best for ever and the value my career both include this portfolio site and explore it.</p> 
       </div>
        </div>
        <div className="w-full pt-10">
        <div className='flex flex-col md:flex-row px-10 gap-4'>
           {config.Projects.map((project)=>(
            <a href={project.link}>
            <div className='relative'>
            <img className='h-[230px] w-[450px]' src={project.image}/>
            <div className='projectdic'>
              <p className='text-center py-5'>{project.description}</p>
            <div className='flex justify-center'>
             <a className='border-2 px-3 rounded-2xl bg-black' target='_blank' href={project.link}>Click Here!</a>
            </div>
            </div>
            </div>
            </a>
          ))}
           </div>
             </div>
             <br/>
             <hr/>
    </section>
}