import watchdemo from "../assets/images/watchdemo.png"
import yellowShoe from "../assets/images/yellowShoe.png"
import mainShoe from "../assets/images/main-shoe.png"
import mainTriangle from "../assets/images/main-triangle.png"
import mobileMainTriangle from "../assets/images/mobile-main-triangle.png"
import yellowSquare from '../assets/images/yellow-square.png'
import mobileYellowSquare from '../assets/images/mobile-yellow-square.png'
// [300px_minmax(auto,_1fr)]
const Section1CollectibleSneakers = () => {
    return (
        <section className="relative z-10 ">
            <div className="container mx-auto ">
                <div className=" flex flex-row justify-between items-center max-lg:flex-col p-20 max-md:py-12 max-md:px-4 gap-20 max-lg:gap-8  ">

                    <div className="flex flex-col gap-8 max-lg:text-center">
                        <h1 className="text-7xl leading-[79.2px] font-extrabold max-md:text-6xl max-md:leading-[61.6px] max-lg:gap-2">Collectible Sneakers</h1>
                        <p className="font-normal text-lg max-w-[714px] max-lg:w-auto max-lg:text-center">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                        <div className="flex items-center gap-4 max-lg:justify-center">
                            <button className="sign-up-button text-xl pt-2 px-4">
                                <p className="px-4">Sign up now</p>
                            </button>
                            <div className="flex items-center text-amber-900 text-base font-medium  px-2">
                                <img src={watchdemo} alt="watch-demo" className="w-6 h-6" />
                                <button className="px-2">Watch Demo</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-10">
                        <img src={mainShoe} alt="main-shoe" />
                    </div>
                    <div className="hidden max-md:block absolute z-[-1] bottom-0 w-svw">
                        <img className="w-full" src={mobileMainTriangle} alt="mobile-main-triangle" />
                    </div>
                </div>
            </div>
            {/* <img className="relative z-20 w-auto" src={yellowShoe} alt="" />
            <div className=" absolute  z-10 -bottom-10 max-[420px]:bottom-10 right-14 max-[420px]:left-10 max-[769px]:bottom-0 max-[769px]:right-24  bg-green-200 ">
                <div className="flex justify-center items-center">
                    <img className="block max-md:hidden" src={yellowSquare} alt="" />
                    <img className="hidden max-md:block" src={mobileYellowSquare} alt="" />
                </div>
            </div> */}

            {/* <div className="flex items-center justify-self-start bg-yellowSquare bg-contain bg-bottom bg-no-repeat bg-red-100">
            <img className="relative   " src={yellowShoe} alt="yellow-shoe" />
        </div> */}
            {/* <div className="flex justify-between max-lg:justify-center items-center max-md:flex-col w-full gap-20 max-md:gap-8 p-20 max-lg:py-12 max-lg:px-4">
                <div className="flex items-center justify-between h-full ">
                    <div className="flex flex-col  max-lg:text-center max-lg:w-auto gap-8">
                        <h1 className="text-7xl leading-[79.2px] font-extrabold max-lg:text-6xl max-lg:leading-[61.6px] max-lg:gap-2">Collectible Sneakers</h1>
                        <p className="font-normal text-lg w-[714px] max-lg:w-auto max-lg:text-center">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>

                        <div className="flex items-center gap-4 max-lg:justify-center">
                            <button className="sign-up-button text-xl pt-2 px-4">
                                <p className="px-4">Sign up now</p>
                            </button>
                            <div className="flex items-center text-amber-900 text-base font-medium  px-2">
                                <img src={watchdemo} alt="watch-demo" className="w-6 h-6" />
                                <button className="px-2">Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-yellowSquare bg-red-200 bg-contain bg-bottom bg-no-repeat flex items-center justify-center ">
                    <img className=" w-full  " src={yellowShoe} alt="yellow-shoe" />

                </div>
            </div> */}
            {/* <div className="relative bg-red-600 flex justify-end items-center">
                    <img className="  w-[486px] h-[388px] max-lg:w-[361px] max-lg:h-[288px] " src={yellowShoe} alt="yellow-shoe" />
                </div> */}
            {/* <div className="relative z-10 flex items-center justify-start max-lg:justify-center ">
                <img className=" w-full h-[388px] max-lg:w-[361px] max-lg:h-[288px] " src={yellowShoe} alt="yellow-shoe" />
                <div className="absolute z-[-1] bg-amber-400 w-9/12 h-[362px] max-lg:w-[272.61px] max-lg:h-[276.32px] rounded-[50px] top-[60px] max-lg:top-10 left-[50px] max-lg:left-[35px] ">
                </div>
            </div> */}


        </section>
    )
}

export default Section1CollectibleSneakers