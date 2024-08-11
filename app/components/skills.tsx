import { SKILLS } from "../lib/data";

const Skills = (): JSX.Element => {
    return (
        <div className="divide-y-2 pb-32 divide-blue-300">
            <h1 className="text-2xl mt-9 font-bold">Skills</h1>
            <div className="flex gap-2 flex-wrap">
                {SKILLS.map((skill: {[key: string]: string}, index) => (
                    <div className="mt-4 p-1 text-xs text-white font-bold" key={index} style={{backgroundColor: skill.color}}>{skill.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Skills;