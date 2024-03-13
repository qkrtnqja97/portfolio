import Language from '../context/Language'
import { useContext } from 'react'
import { Link } from "react-router-dom"

export function Work({number}){
    const {text}=useContext(Language)
    let title, description, link
    switch(number){
        case 1:
            title=text.project1Name;
            description=text.project1Description;
            link=text.links1;
            break;
        case 2:
            title=text.project2Name;
            description=text.project2Description;
            link=text.links2;
            break;
        case 3:
            title=text.project3Name;
            description=text.project3Description;
            link=text.links3;
            break;
        case 4:
            title=text.project4Name;
            description=text.project4Description;
            link=text.links4;
            break;
        case 5:
            title=text.project5Name;
            description=text.project5Description;
            link=text.links5;
            break;
        default:
            break;
    }
    let arrayLinks= Object.keys(link);

    return(
        <div className='flex flex-col'>
            <h1 className='font-bold text-2xl mb-3 md:mb-10 lg:mb-20'>{title}</h1>
            <p className='px-4 border-l-4 border-[#328ad2] leading-loose text-justify'>
                {description}
            </p>
            <ul className='px-4 border-l-4 border-[#328ad2] leading-loose text-justify'>
                {
                    arrayLinks.map((item)=>{
                        return <li key={item}><Link to={link[item]} target='_blank' className='border-b-2 border-[#328ad2]'>{item}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}