import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu, settoggleManu]=useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary">
       <a className="text-black font-bold hover:bg-stone-500 bg-white border-0 border-r-2 border-l-2 border-t-2 border-b-2 rounded-2xl" href="#">AkashFoLio</a>  
       <nav className="hidden md:block">
       <ul className="flex text-white">
          <li><a href="/" className='border-2 px-4 rounded-bl-2xl hover:bg-stone-950 bg-secondary'>Home</a></li>
          <li><a href="#about" className='border-2 px-4 rounded-bl-2xl hover:bg-stone-950 bg-secondary'>About</a></li>
          <li><a href="#projects" className='border-2 px-4 rounded-bl-2xl hover:bg-stone-950 bg-secondary'>Projects</a></li>
          <li><a href="#resume" className='border-2 px-4 rounded-bl-2xl hover:bg-stone-950 bg-secondary'>Resume</a></li>
          <li><a href="#contect" className='border-2 px-4 rounded-bl-2xl hover:bg-stone-950 bg-secondary'>Contect</a></li>
       </ul>
       </nav>  
       {toggleMenu && <nav className="block md:hidden">
       <ul onClick={()=>settoggleManu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
          <li><a href="/" className='hover:bg-zinc-900'>Home</a></li>
          <li><a href="#about" className='hover:bg-zinc-900'>About</a></li>
          <li><a href="#projects" className='hover:bg-zinc-900'>Projects</a></li>
          <li><a href="#resume" className='hover:bg-zinc-900'>Resume</a></li>
          <li><a href="#contect" className='hover:bg-zinc-900'>Contect</a></li>
       </ul>
       </nav>}
       <button onClick={()=> settoggleManu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
       </header>
     
}   