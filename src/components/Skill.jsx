export function Skill({skill}){
    return(
        <>
            <h3 className="lg:text-lg text-xs lg:font-bold mt-2">{skill.name}</h3>
            <div className="w-full rounded-md bg-slate-200">
                <div className={`bg-[#52A5E0] ${skill.percentage} rounded-md text-base text-center`}>{skill.knowladge}/100</div>
            </div>
        </>
    )
}