import { navLinks } from "../Constant/constant"
import hamburger from "../assets/images/hamburger.png"

const Navbar = () => {


    return (
        <header className="container-lg ">
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand text-primary fs-2 fw-bold" href="#">Collers</a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={hamburger} alt="" />
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav d-flex align-items-center justify-content-end w-100 gap-3">
                        {
                            navLinks.map(item => (
                                <li key={item.label} className="nav-item text-decoration-none ">
                                    <a className="nav-link  text-primary fs-6" href={`#${item.href}`} >{item.label}</a>
                                </li>
                            ))
                        }
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <button className="text-primary border-2 border-primary px-3 rounded-lg">
                                    Sign up now
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}


export default Navbar