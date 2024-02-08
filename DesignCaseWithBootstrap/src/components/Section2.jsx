import { threeRows } from "../Constant/constant"

const Section2 = () => {
  return (
    <section className="container-lg py-80">
      <div className="row">
        {threeRows.map(eachRow => (
          <div key={eachRow.title} className="col-lg-4 ">
            <div className="position-relative">
              <img className="position-relative" src={eachRow.source} alt={eachRow.title} />
              <img className="position-absolute top-[-15px] left-[-55px]" src={eachRow.bgimage} alt={eachRow.title} />
            </div>
            <h2 className="text-xl font-semibold text-[#0F172A]">{eachRow.title}</h2>
            <p className="text-lg font-normal pr-4 max-md:pr-0">{eachRow.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section2