import type { MissionAndVisionsCardProps } from "../MissionAndVisions.types";
import "./MissionAndVisionsCard.css";


const MissionAndVisionsCard = ({
  title,
  description,
  iconSrc,
}: MissionAndVisionsCardProps) => {
  return (
     <div className="mission-vision-card">
      <div className="mission-vision-card-header">
        <h3 className="mission-vision-card-title">{title}</h3>

        <img
          className="mission-vision-card-icon"
          src={iconSrc}
        />
      </div>

      <p className="mission-vision-card-description">
        {description}
      </p>
    </div>
  )
}

export default MissionAndVisionsCard

