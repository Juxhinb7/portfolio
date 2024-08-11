import Link from "next/link"
import { MdDarkMode } from "react-icons/md";
import { Dropdown } from "./dropdown";
import ThemeToggle from "./theme-toggle";
import { useParams } from "next/navigation";

const NavBar = (): JSX.Element => {
    
    return (
    <div className="mt-4 flex w-11/12 sm:w-10/12 2xl:w-4/12 mx-auto navbar navbar-sticky dark:bg-gray-700 rounded-lg">
        <div className="navbar-start">
            <h1 className=" font-bold">Porfolio</h1>
        </div>
        <div className="navbar-end space-x-4">
            <ul className="space-x-4 hidden sm:block font-medium">
                <Link href="/">
                    <span className="group">
                        <span className="opacity-0 group-hover:opacity-100 group-hover:text-blue-500 dark:group-hover:text-blue-300">
                            &lt;
                        </span>
                        <span className="group-hover:text-blue-500 dark:group-hover:text-blue-300 opacity-100">Home</span>
                        <span className="opacity-0 group-hover:opacity-100 group-hover:text-blue-500 dark:group-hover:text-blue-300">
                            &nbsp;/&gt;
                        </span>
                    </span>
                </Link>
                <Link href="/projects">
                    <span className="group">
                        <span className="opacity-0 group-hover:opacity-100 group-hover:text-blue-500 dark:group-hover:text-blue-300">
                            &lt;
                        </span>
                            <span className="group-hover:text-blue-500 dark:group-hover:text-blue-200">Projects</span>
                        <span className="opacity-0 group-hover:opacity-100 group-hover:text-blue-500 dark:group-hover:text-blue-300"> 
                            &nbsp;/&gt;
                        </span>
                    </span>
                </Link>
            </ul>
            <Dropdown />
            <ThemeToggle />
        </div>
    </div>
    )
}

export default NavBar;