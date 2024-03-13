import Language from '../context/Language'
import { useContext } from 'react'
export function Greeting(){
    const {text} = useContext(Language)
    return(
        <div className='flex flex-col'>                
            <h1 className='font-bold text-4xl mb-3 md:mb-10 lg:mb-20 textshadow'>Hello!!</h1>       
            <p className='px-4 border-l-4 border-[#328ad2] leading-loose text-justify'>
                "Greetings, I am a web developer based in Canada. I enjoy creating user-friendly and clean interfaces. Currently, I work as a front-end developer specializing in React. If you have any projects in mind, please let me know. I am eager to collaborate and bring your ideas to life.",
            </p>
        </div>
    )
}