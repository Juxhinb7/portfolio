import Image from "next/image";
import { PROJECTS } from "../lib/data";
import Link from "next/link";

const Projects = () => {
    return (
        <div className="space-y-9 mt-4">
            {PROJECTS.map((entry: {[key: string]: any}, index) => (
                    <div className="card card-image-cover cursor-pointer" key={index}>
                        <Link href={entry.url} target="_blank">
                            <Image src={entry.imageUrl} alt="Project image" className="mx-auto w-full"/>
                            <div className="card-body">
                                <h1 className="mx-auto card-header">{entry.title}</h1>
                                <p className="text-content2">
                                    {entry.description}
                                </p>
                            </div>
                        </Link>

                    </div>

            ))}
        </div>
    )
}

export default Projects;