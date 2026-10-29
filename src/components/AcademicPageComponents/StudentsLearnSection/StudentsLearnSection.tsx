import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import StudentsLearnGrid from "./StudentsLearnGrid/StudentsLearnGrid";
import "./StudentsLearnSection.css";
import type { StudentsLearnCardProps } from "./StudentsLearnSectionType";
 interface StudentsLearnSectionProps {
      label: string;
  title: string;
  description: string;
  cards: StudentsLearnCardProps[];
}
const StudentsLearnSection = ({label, title, description, cards}:StudentsLearnSectionProps ) => {
  return (
    <div className="students-learn-section">
           <SectionHeader
                label={label}
                title={title}
                description={description}
                titleClassName="learn-title-style"
                descClassName ="learn-desc-style"
              />
              <StudentsLearnGrid cards={cards} />
      
    </div>
  )
}

export default StudentsLearnSection
