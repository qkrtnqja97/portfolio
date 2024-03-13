import '../styles/portfolio.css'
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { Link } from "react-router-dom"

export function Footer(){
    return(
        <footer className="flex justify-center absolute bottom-0 left-0 right-0 item4 rounded-md">
            <ul className="flex-1 flex justify-start gap-5 text-xl px-2">
                <li><Link to="mailto:qkrtnqja97@gmail.com?subject=Contact"><SiGmail /></Link></li>
                <li><Link to="https://github.com/qkrtnqja97" target='_blank'><SiGithub /></Link></li>
            </ul>
            <ul className="flex-1 flex justify-end">
                <li>&#169;2024 Soobeom Park</li>
            </ul>
        </footer>
    )
}