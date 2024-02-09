import { JoinUs } from "../Constant/constant"
import check from "../assets/images/check.png"
import joinVideo from "../assets/images/join-video.png"
import video from "../assets/images/why-video.png"
import topBar from "../assets/images/why-top-bar.png"
import joinVideoDecoration from "../assets/images/join-video-decoration.png"
import mobileJoinVideoDecoration from "../assets/images/mobile-join-video-decoration.png"
import yellowRectangle from "../assets/images/yellow-rectangle.png"

const Section4WhyJoinUs = () => {
    return (
        <section className="container mx-auto flex justify-center items-center py-40 px-20 max-md:px-4 max-md:pt-8 max-md:pb-28 overflow-hidden">
            <div className="w-full bg-white p-20 max-md:px-4 max-md:py-8 rounded-[30px] max-md:gap-8 drop-shadow-xl   ">
                {/* box-shadow: 0px 20px 25px -5px #0000001A */}
                {/* <div className="relative z-0 grid grid-cols-2 max-xl:grid-cols-1 place-items-center  gap-20 max-md:gap-8 "> */}
                <div className="relative z-0 flex max-lg:flex-col justify-between items-center  gap-20 max-md:gap-8 ">
                    <div className="flex flex-col gap-6 relative z-20 max-xl:items-center">
                        <h1 className="text-[56px] font-extrabold max-md:text-center max-md:text-3xl">Why join us</h1>
                        <ul>
                            {
                                JoinUs.map(listItem => (
                                    <li key={listItem.id} className="flex items-center max-md:items-start gap-2 text-xl max-md:text-base my-2">
                                        <img className="max-md:mt-1" src={check} alt="check" />
                                        <p>{listItem.listTitle}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex max-md:justify-center">
                            <button className="bg-transparent border-2 border-amber-900 text-amber-900 rounded-lg p-4 flex items-center gap-3">
                                <p className="px-4  text-xl font-semibold">Sign up now</p>
                            </button>
                        </div>
                    </div>

                    <div className="relative  ">
                        <div className="relative z-20 flex flex-col justify-center items-center">
                            <div className="  border-white rounded-xl">
                                <img className="relative bottom-[-20px] border-white border-[5px] border-b-0 bg-white rounded-t-xl" src={topBar} alt="" />
                            </div>
                            <img className=" border-[5px]  border-white rounded-xl  rounded-b-xl" src={video} alt="" />
                        </div>
                        <div className="absolute z-10 top-[-20px] hidden min-[470px]:block">
                            <img className=" scale-125 lg:scale-[1.4]  ml-4 max-lg:ml-0  " src={joinVideoDecoration} alt="" />
                        </div>
                        <div className="absolute z-10 top-[-20px] hidden max-[470px]:block">
                            <img className=" scale-125" src={mobileJoinVideoDecoration} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Section4WhyJoinUs