import "./OurHistory.css";
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import HistoryList from './HistoryList/HistoryList'
import type { HistoryItemProps } from './OurHisoryType';
interface OurHistoryProps {
  label: string;
  title: string;
  description: string;
  items: HistoryItemProps[];
  
}

const OurHistory = ({label, title, description, items} :OurHistoryProps) => {
  return (
   <div className="our-history">
       <SectionHeader
        label={label}
        title={title}
        description={description}
        titleClassName="history-title-style"
        descClassName ="history-desc-style"
      />
    <HistoryList  items={items} />
   </div>
      
  
  )
}

export default OurHistory
