import webChart from "../assets/images/web-chart.png"
import ellipses from "../assets/images/ellipses.png"
import coolShoes from "../assets/images/cool-shoes.png"
//  style={{backgroundImage:"url('../assets/images/web-chart.png')"}}
//  bg-myImg bg-auto bg-no-repeat bg-center bg-local
const Section7Shoes = () => {
    return (
        <section className="relative bg-amber-900 p-20 max-md:py-12 max-md:px-0 ">
            <div className=" flex flex-col justify-center items-center bg-worldMap bg-auto bg-no-repeat bg-center max-md:bg-left bg-local h-max">
                <div className="relative z-10 w-auto max-md:w-full flex flex-col justify-center items-center bg-worldPoints bg-auto bg-no-repeat bg-center mb-8  max-md:bg-[13rem_8rem]">
                    <div className=" flex flex-col justify-center items-center gap-8 min-h-[633px] max-md:min-h-[717px]">
                        <h1 className="text-8xl max-md:text-5xl text-white font-extrabold">11,658,467</h1>
                        <h2 className="text-6xl max-md:text-3xl text-white font-extrabold">Shoes Collected</h2>
                    </div>
                    <div className="absolute z-20 left-[-300px] max-md:left-[30px] top-[-30px] ">
                        <img src={coolShoes} alt="" />
                    </div>
                    {/* <div className="absolute z-10 max-md:overflow-x-hidden">
                        <img  className="ml-24 mb-10" src={ellipses} alt="" />
                    </div>
                    <div className="absolute z-[1] ">
                        <img src={webChart} alt="" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Section7Shoes