import { useContext } from "react";
import Language from "../context/Language";
import { Link } from "react-router-dom"
export function Navbar(){
    const { handleLanguage }=useContext(Language)
    return(
        <nav className="flex justify-center item1 rounded-md">
            <ul className=" flex-1 flex">
                <li className="lg:text-3xl md:text-xl text-lg font-bold"><Link to="/">TONY</Link></li>
            </ul>
        </nav>
    )
}