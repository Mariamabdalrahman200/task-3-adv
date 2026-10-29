import "./CornerDecoration.css";

const CornerDecoration = () => {
   const rows = [4, 3, 2, 1];
  return (
    <div className="decoration-container">
      {rows.map((count, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: count }).map((item, index) => (
    <div className="decoration-item">
     <div className="orange-shape"></div>
      <div className="square"></div>
  </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default CornerDecoration;