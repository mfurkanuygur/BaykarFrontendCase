import { BestProducts } from "../Constant/constant"
import bestBackground from '../assets/images/best-background.png'

const Section3 = () => {
    return (
        <section className="bg-secondary overflow-hidden">
            <div className="position-relative container-lg px-0 py-lg-80 py-5 px-3 bg-secondary text-white">
                <div className="  d-flex flex-column gap-lg-80 gap-32">
                    <div className="d-flex align-items-center justify-content-md-center justify-content-lg-between flex-column flex-sm-column  flex-lg-row gap-32 gap-sm-32   ">
                        <h1 className="text-md-center fw-bolder fs-56 ">The best of the best</h1>
                        <div className="d-flex align-items-center justify-content-md-center ">
                            <button className=" border border-2 border-white rounded-3 py-3 px-5 bg-transparent text-white fs-4">
                                Sign up now
                            </button>
                        </div>
                    </div>
                    <div className="row px-4 px-sm-4 px-lg-0 position-relative z-1">
                        {
                            BestProducts.map(item => (
                                <div key={item.id} className="col-lg-4 col-md-4 my-3 my-sm-3 ">
                                    <div className="border rounded-3 bg-secondary">
                                        <div >
                                            <img className="w-100 rounded-3" src={item.source} alt="" />
                                        </div>
                                        <div className="px-32 pt-32 d-flex flex-column gap-1">
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="p-32">
                                            <button className="w-100 border border-2 rounded-3 p-3 bg-transparent text-white">
                                                Sign up now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="position-absolute z-n1 top-50 start-50  translate-middle ">
                            <img src={bestBackground} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3