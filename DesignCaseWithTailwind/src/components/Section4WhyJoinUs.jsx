import { JoinUs } from "../Constant/constant"
import check from "../assets/images/check.png"
import joinVideo from "../assets/images/join-video.png"
import yellowRectangle from "../assets/images/yellow-rectangle.png"

const Section4WhyJoinUs = () => {
    return (
        <section className="bg-[#fffcf2] flex justify-center py-40 px-20 max-md:px-4 max-md:pt-4 max-md:pb-14 overflow-hidden">
            <div className="container bg-white p-20 max-md:px-4 max-md:py-8 rounded-[30px] max-md:gap-8 drop-shadow-[0px_0px_10px_#00000012]">
                {/* box-shadow: 0px 20px 25px -5px #0000001A */}
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-20">
                    <div className="flex flex-col gap-6 relative ">
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
                  
                </div>
            </div>
        </section>
    )
}

export default Section4WhyJoinUs