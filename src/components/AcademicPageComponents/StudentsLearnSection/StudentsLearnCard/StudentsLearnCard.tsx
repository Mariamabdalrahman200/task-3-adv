import type { StudentsLearnCardProps } from "../StudentsLearnSectionType";
import "./StudentsLearnCard.css";

const StudentsLearnCard = ({ image, title, description }: StudentsLearnCardProps) => {
  return (
    <div className="students-learn-card">
      
      <div className="card-image-container">
        <img src={image} alt="" className="card-image" />
      </div>

      <div className="card-text-container">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

    </div>
  )
}

export default StudentsLearnCard
