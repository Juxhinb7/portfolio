import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiDownload } from "react-icons/hi";

const About = (): JSX.Element => {
    return (
        <div className="divide-y-2 divide-blue-300 dark:text-gray-200">
          <h1 className="text-2xl font-bold mt-9">About me</h1>
          <div>
            <p className="mt-4">After graduating with an apprenticeship certificate (Ausbildungszeugnis) in Software Development in Germany, i decided to put my skills and experience that i gained while i was at school, in to work by building side projects and a portfolio.</p>
            <p className="mt-4">My favorite part of programming is the problem-solving aspect.</p>
            <p className="mt-4">My current main stack is React, Next.js, Flask and Django. I am also familiar with TypeScript.</p>
            <p className="mt-4">I always strive to learn new technologies. I am currently looking for a full-time position as a software developer.</p>
            <p className="mt-4">If you have any questions, don&apos;t hesitate to reach out. </p>
            <div className="flex flex-row gap-2">
              <Link target="_blank" href="/github"><FaGithub className="mt-4 size-6 hover:text-gray-400" /></Link>
              <Link target="_blank" href="/linkedin"><FaLinkedin className="mt-4 size-6 hover:text-gray-400" /></Link>
            </div>
            
            <a className="group mt-6 w-48 p-2 rounded-xl bg-white text-gray-700 border-2 border-black/10  flex hover:scale-110 items-center justify-center gap-2 border-gray-300" href="/lebenslauf.pdf" download>
              Download CV {" "}
              <HiDownload className="group-hover:translate-y-1"/>
            </a>
          

          </div>
        </div>
    )
}

export default About;