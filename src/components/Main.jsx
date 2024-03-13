import { Greeting } from './Greeting'
import { Routes, Route, Link } from "react-router-dom"
import { About } from './About'
import { Work } from './Work'
import Language from '../context/Language'
import { useContext, useState } from 'react'
export function Main(){
    const {text}=useContext(Language)
    const [number,setNumber]=useState(0)
    function select(num){
        setNumber(num)
    }
    return(
        <>
            <nav className="item2 m-auto z-0">
                <div className='fancysmallborder relative'>
                    <div className='flex flex-col list-none bg-[#12191c] rounded-tl-md'>
                        <Link to="about" className='p-3'>{text.menuAbout}</Link>
                        <ul className=' p-3 space-y-2'>
                            <li>{text.menuProjects} :</li>
                            <li className='pl-3'>
                            <Link to="projects" className='p-3' onClick={()=>{select(1)}}>{text.project1Name}</Link>
                            </li>
                            <li className='pl-3'>
                            <Link to="projects" className='p-3' onClick={()=>{select(2)}}>{text.project2Name}</Link>
                            </li>
                            <li className='pl-3'>
                            <Link to="projects" className='p-3' onClick={()=>{select(3)}}>{text.project3Name}</Link>
                            </li>
                            <li className='pl-3'>
                            <Link to="projects" className='p-3' onClick={()=>{select(4)}}>{text.project4Name}</Link>
                            </li>
                        </ul>
                                            
                    </div>
                </div>
            </nav>
            <div className="item3 my-auto">
                <Routes>
                    <Route path="/"  element={<Greeting />} />
                    <Route path="about" element={ <About /> } />              
                    <Route path="projects" element={ <Work number={number} /> } />                
                </Routes>
            </div>
        </>
    )
}