import { FooterLinks } from "../Constant/constant"
import AppStore from "../assets/images/App-Store.png"
import GooglePlay from "../assets/images/Google-Play.png"
import World from "../assets/images/world.png"
const Footer = () => {
    return (
        <footer className="bg-secondary ">
            <div className="container-lg py-5 d-flex flex-column justify-content-between align-items-md-stretch w-100 bg-danger">
                <div className="row text-white">
                    <div className="col-lg-3 flex flex-column justify-content-between bg-info">
                        <ul className="p-0 ">
                            <h6 className="">Products</h6>
                            {FooterLinks.products.map(item => (
                                <li className="  " key={item}><a href="" className="cursor-pointer  ">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3  ">
                        <ul className="p-0">
                            <h6 className="">Solutions</h6>
                            {FooterLinks.solutions.map(item => (
                                <li className=" " key={item}><a href="" className="cursor-pointer ">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 ">
                        <ul className="p-0">
                            <h6 className="">Support</h6>
                            {FooterLinks.support.map(item => (
                                <li className="" key={item}><a href="" className="cursor-pointer ">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 ">
                        <div className=" ">
                            <div className=" ">
                                <h6 className=""> Get the App</h6>
                                <div className="">
                                    <div className=""><img className="my-2" src={AppStore} alt="App-Store" /></div>
                                    <div className=""><img className="my-2" src={GooglePlay} alt="Google-Play-Store" /></div>
                                </div>
                            </div>
                            <div className="">
                                <h6 className="">Follow Us</h6>
                                <div className="">
                                    {FooterLinks.followingLinks.map(item => (
                                        <div className="cursor-pointer   " key={item}>
                                            <img src={item} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-info w-100">
                    <p className=" ">Collers @ 2023. All rights reserved.</p>
                    <ul className="p-0">
                        {FooterLinks.footerBottomNav.map(item => (
                            <li key={item}>{item}</li>
                            
                        ))}
                        <li className=" ">
                            <img src={World} alt="world" />
                            <div className=""><p className="">EN</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer