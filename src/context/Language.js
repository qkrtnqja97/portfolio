import { createContext, useState } from "react";

const Language = createContext();

const dictionary = {
    en: {
        menuAbout: "About me",
        menuSkills: "Skills",
        menuContact: "Contact",
        menuProjects: "Projects",
        aboutText:
            "Hello, everyone! My name is Soobeom, and I am a computer systems engineering. I am student in Computer Systems Engineering, which has equipped me with a strong foundation in various aspects of technology. Over the past 5 years, I have been studied computer technology, such as backend, frontend, iot etc.. I worked at Chung Ang University Lab for 1 year, I made the programs and I enjoy utilizing tools like Tailwind CSS to create visually appealing and efficient user interfaces. Also I studied Tamwood College to improve my development and communication skills. This is my Tamwood Project Pages.",
        thanksText:
            "Thank you for your interest, it will be a pleasure working together.",
        project1Name: "MSPET",
        project1Description:
            "This project was one of the first that I did with my Japanese friend. It helps me understand how HTML, CSS and JavaScript worked.  The purpose of this project is to help abandoned animals find their new owners.",
        links1: { Git: "https://github.com/maya9906/mspet-2" },
        project2Name: "RESPONSIVE-GRID-SHOWCASE",
        project2Description:
            "This project is about a grid showcase. This is one of my first grid Project. It is Korean&Janpese snacks shop. It helps me improve my responsive web site project skills.",
        links2: { Git: "https://github.com/Chinatsu0820/responsive-grid-showcase" },
        project3Name: "MINI GAMES",
        project3Description:
            "This was the minigame that enchance javascript skill. I did it with two forien friends, one of them made hangman, other made timer. I made the rock-paper-scissors game. I tried to put some imgs and made some functions to show moving.",
        links3: { Git: "https://github.com/qkrtnqja97/mini-games2" },
        project4Name: "TERRIBLE-WEBSITE",
        project4Description:
            "This is the one of my course contest to make the worst website. The purpose of this project was making uncomfortable website. So I used some pictures that make people feel terrible. And hide the next button to change the page. Let's try to finish it.",
        links4: { Git: "https://github.com/qkrtnqja97/terrible-website-contest-soobeom" },
    },
};

export function LanguageProvider({ children }) {
    const [text, setText] = useState(dictionary.en);

    function handleLanguage(val) {
        setText(dictionary.en);
    }

    const data = { text, handleLanguage };
    return <Language.Provider value={data}>{children}</Language.Provider>;
}
export default Language;