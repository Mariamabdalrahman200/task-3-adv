import StudentsLearnCard from "../StudentsLearnCard/StudentsLearnCard";
import type { StudentsLearnCardProps } from "../StudentsLearnSectionType";
import "./StudentsLearnGrid.css";
 interface StudentsLearnGridProps {
  cards: StudentsLearnCardProps[];
}
const StudentsLearnGrid = ({ cards }: StudentsLearnGridProps) => {
  return (
   <div className="students-learn-grid">
      {cards.map((card, index) => (
        <StudentsLearnCard 
          key={index} 
          {...card} 
        />
      ))}
    </div>
  )
}

export default StudentsLearnGrid
