import { useState } from "react"
import { navLinks } from "../Constant/constant"
import hamburger from "../assets/images/hamburger.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="myMenu relative z-10 px-20 py-6 max-md:px-4">
            <nav >
                <div className="flex justify-between items-center">
                    <a className="text-[32px] text-amber-900 font-bold " href="#">Collers</a>
                    <ul className="flex items-center gap-4 max-md:hidden">
                        {navLinks.map((item) => (
                            <li className="py-3 px-2 text-amber-900 font-medium text-base leading-6" key={item.label}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                        <button className="sign-up-button ">Sign up now</button>
                    </ul>
                    <div className='hidden cursor-pointer max-md:block '>
                        <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={openMenu} />

                    </div>
                </div>


                {isOpen ? (
                    <div className="flex flex-col justify-center items-center text-center">
                        <ul className="hidden  max-md:block ">
                            {navLinks.map((item) => (
                                <li className="py-3 px-2 text-amber-900 font-medium text-base leading-6" key={item.label}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                            <button className="sign-up-button">Sign up now</button>
                        </ul>
                    </div>
                ) : null}

            </nav>
        </header >
    )
}


export default Navbar