import { Skill } from "./Skill"
import { useContext } from 'react'
import Language from '../context/Language'

export function About(){
    const {text}=useContext(Language)
    const skills=[{
        id:1,
        name:'HTML',
        percentage:'w-10/12',
        knowladge: 80
    },
    {
        id:2,
        name:'CSS',
        percentage:'w-9/12',
        knowladge: 70
    },
    {
        id:3,
        name:'JAVASCRIPT',
        percentage:'w-10/12',
        knowladge: 80
    },
    {
        id:4,
        name:'REACT',
        percentage:'w-3/5',
        knowladge: 60
    },
    {
        id:5,
        name:'GIT',
        percentage:'w-9/12',
        knowladge: 70
    },
    {
        id:7,
        name:'TAILWIND',
        percentage:'w-3/5',
        knowladge: 60
    }
    ]
    return (
        <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
            <h1 className='font-bold text-2xl'>{text.menuAbout}</h1>
            <p className="border-l-4 border-[#328ad2] px-4 leading-loose text-justify">{text.aboutText}</p>
            <h1 className='font-bold text-2xl'>{text.menuSkills}</h1>         
            <div className='border-l-4 border-[#328ad2] px-4'>
            {skills.map(item=>{
                return item.id<10?<Skill skill={item} key={item.id} />:null 
            })}
            </div>
        </div>
    )
}