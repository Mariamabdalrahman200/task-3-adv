import type { HistoryItemProps } from "../OurHisoryType";
import "./HistoryItem.css";
import YearDecoration from "./YearDecoration/YearDecoration";

const HistoryItem = ({ year, title, description }: HistoryItemProps) => {
  return (
    <div className="history-item">
      <div className="timeline-left">
        <div className="timeline-connector">
          <div className="timeline-circle"></div>
          <div className="timeline-horizontal-line">
             <div className="timeline-inner-line"></div>

          </div>
          <div className="timeline-circle"></div>
        </div>
        <div className="year-box">
           < YearDecoration />
          <span className="year-text">{year}</span>
        
        </div>
      </div>

      <div className="history-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HistoryItem;
