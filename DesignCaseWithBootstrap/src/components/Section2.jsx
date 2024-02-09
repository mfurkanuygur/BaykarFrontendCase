import { threeRows } from "../Constant/constant"

const Section2 = () => {
  return (
    <section className="section-two container-lg py-80 d-flex justify-content-center align-items-center">
      <div className="row">
        {threeRows.map(eachRow => (
          <div key={eachRow.title} className="col-lg-4 col-md-4 gap-3 ">
            <div className="position-relative">
              <img className="position-relative" src={eachRow.source} alt={eachRow.title} />
              <div className="position-absolute w-100">
                <img src={eachRow.bgimage} alt={eachRow.title} />
              </div>
            </div>
            <h2 className="">{eachRow.title}</h2>
            <p className="">{eachRow.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section2