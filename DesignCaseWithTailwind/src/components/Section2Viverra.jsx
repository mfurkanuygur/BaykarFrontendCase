import { threeRows } from "../Constant/constant"

const Section2Viverra = () => {
    return (
        <section className="relative z-10 flex items-center justify-center p-20 max-md:px-4 max-md:py-12 gap-20 max-md:flex-col max-md:bg-amber-100">
            {threeRows.map(eachRow => (
                <div key={eachRow.title} className="flex flex-col gap-4 max-md:text-center max-md:items-center max-md:justify-center">
                    <div className="relative">
                        <img className="relative" src={eachRow.source} alt={eachRow.title} />
                        <img className="absolute top-[-5px] left-[25px]" src={eachRow.bgimage} alt={eachRow.title} />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0F172A]">{eachRow.title}</h2>
                    <p className="text-lg font-normal pr-4 max-md:pr-0">{eachRow.detail}</p>
                </div>
            ))}
        </section>
    )
}

export default Section2Viverra