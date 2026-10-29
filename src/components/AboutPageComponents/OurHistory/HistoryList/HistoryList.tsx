import HistoryItem from "../HistoryItem/HistoryItem";
import type { HistoryItemProps } from "../OurHisoryType";
import "./HistoryList.css";

interface HistoryListProps {
  items: HistoryItemProps[];
}

const HistoryList = ({ items }: HistoryListProps) => {
  return (
    <div className="history-card">
      <div className="history-list">
        {items.map((item,index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HistoryList;