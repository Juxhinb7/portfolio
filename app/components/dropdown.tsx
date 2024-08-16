import Link from "next/link"
import { CiMenuBurger } from "react-icons/ci"

export const Dropdown = (): JSX.Element => {
    return (
        <div className="block sm:hidden">
            <input type="checkbox" id="drawer-right" className="drawer-toggle" />
            <label htmlFor="drawer-right" className="btn btn-ghost">
                <CiMenuBurger />
            </label>
            <label className="overlay" htmlFor="drawer-right" />
            <div className="drawer drawer-right">
	            <div className="drawer-content pt-10 flex flex-col h-full">
		            <label htmlFor="drawer-right" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
		            <div className="menu-items">
			            <Link href="/" className="text-xl font-medium menu-item flex justify-center mt-4">Home</Link>
                        <Link href="/projects" className="text-xl font-medium menu-item flex justify-center mt-4">Projects</Link>
		            </div>
	            </div>
            </div>
        </div>
    )
}