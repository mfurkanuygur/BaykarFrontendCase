import { threeRows } from "../Constant/constant"

const Section2Viverra = () => {
    return (
        <section className=" w-full flex justify-center items-center max-md:bg-amber-100">
           <div className="container relative z-10 flex items-center justify-center p-20 max-md:px-4 max-md:py-12 gap-20 max-lg:flex-col ">
                {threeRows.map(eachRow => (
                    <div key={eachRow.title} className="flex flex-col gap-4 max-lg:text-center max-lg:items-center max-md:justify-center">
                        <div className="relative">
                            <img className="relative" src={eachRow.source} alt={eachRow.title} />
                            <img className="absolute top-[-5px] left-[25px]" src={eachRow.bgimage} alt={eachRow.title} />
                        </div>
                        <h2 className="text-xl font-semibold text-[#0F172A]">{eachRow.title}</h2>
                        <p className="text-lg font-normal pr-4 max-md:pr-0">{eachRow.detail}</p>
                    </div>
                ))}
           </div>
        </section>
    )
}

export default Section2Viverra