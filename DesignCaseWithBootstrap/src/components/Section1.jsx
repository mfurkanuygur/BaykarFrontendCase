import watchdemo from "../assets/images/watchdemo.png"
import mainShoe from "../assets/images/main-shoe.png"

const Section1 = () => {
    return (
        <section className="section-one container-lg py-80  d-flex align-items-center">
            <div className="row d-flex justify-between ">
                <div className="col-lg-7 d-flex align-items-center ">
                    <div className="d-flex flex-column gap-3">
                        <h1>Collectible Sneakers</h1>
                        <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                        <div className="d-flex align-items-center gap-4">
                            <button className=" text-xl pt-2 px-4">
                                Sign up now
                            </button>
                            <div className="d-flex align-items-center gap-1">
                                <div><img src={watchdemo} alt="watch-demo" className="w-6 h-6" /></div>
                                <button className="px-2">Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5  ">
                    <div className=" w-100 p-5">
                        <img src={mainShoe} alt="" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Section1 