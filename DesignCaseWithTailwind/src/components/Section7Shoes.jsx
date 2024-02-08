import webChart from "../assets/images/web-chart.png"
import ellipses from "../assets/images/ellipses.png"
import coolShoes from "../assets/images/cool-shoes.png"
// lg:bg-[23rem_7rem] 2xl:bg-center
//md:bg-[8rem_7rem] lg:bg-[center_7rem]
const Section7Shoes = () => {
    return (
        <section className="relative bg-worldMap bg-local bg-no-repeat bg-[1rem] lg:bg-center bg-amber-900 py-20 max-lg:px-0  ">
            <div className="bg-worldPoints bg-local bg-no-repeat bg-[14.5rem_6rem] md:bg-[14rem_6.5rem] lg:bg-center ml-20  max-lg:ml-0 mb-6 max-lg:mb-0 min-h-[717px] ">
                <div className="relative mx-auto w-full flex justify-center items-center  min-h-[700px]  ">
                    <div className=" absolute flex flex-col justify-center items-center gap-2  text-white ">
                        <h1 className="text-8xl max-md:text-5xl font-extrabold">11,658,467</h1>
                        <h2 className="text-[56px] max-md:text-3xl font-bold">Shoes Collected</h2>
                    </div>
                </div>
                <div className="absolute top-0 w-auto">
                    <img src={coolShoes} alt="" />
                </div>
            </div>






            {/*<div className=" flex flex-col justify-center items-center bg-worldMap max-[430px]:bg-mobileWorldMap bg-cover  max-[430px]:bg-contain bg-no-repeat bg-left max-[430px]:bg-top  bg-local h-max">
                <div className="relative z-10 w-auto max-md:w-full bg-worldPoints max-[430px]:bg-mobileWorldPoints bg-auto  bg-no-repeat bg-center max-[430px]:bg-ri mb-8  max-md:bg-[11rem_8rem]">
                   <div className="  flex flex-col justify-center items-center">
                        <div className=" flex flex-col justify-center items-center gap-8 max-md:gap-4 min-h-[630px] max-md:min-h-[717px]">
                            <h1 className="text-8xl max-md:text-5xl text-white font-extrabold">11,658,467</h1>
                            <h2 className="text-6xl max-md:text-3xl text-white font-extrabold">Shoes Collected</h2>
                        </div>
                        <div className="absolute z-20 left-[-300px] max-lg:left-[30px] top-[-30px] ">
                            <img src={coolShoes} alt="" />
                        </div>
                   </div>
                     <div className="absolute z-10 max-md:overflow-x-hidden">
                        <img  className="ml-24 mb-10" src={ellipses} alt="" />
                    </div>
                    <div className="absolute z-[1] ">
                        <img src={webChart} alt="" />
                    </div> 
                </div>
            </div>*/}


        </section>

    )
}

export default Section7Shoes