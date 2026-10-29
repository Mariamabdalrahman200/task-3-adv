import "./YearDecoration.css";

const YearDecoration = () => {
  return (
    <div className="year-decoration">
      {Array.from({ length: 9 }).map((item, index) => (
        <div key={index} className="decoration-item">
          <div className="orange-shape"></div>
          <div className="square"></div>
        </div>
      ))}
    </div>
  )
}

export default YearDecoration
