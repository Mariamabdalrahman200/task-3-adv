import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import "./MissionAndVisions.css";
import type { MissionAndVisionsCardProps } from "./MissionAndVisions.types";
import MissionAndVisionsCard from "./MissionAndVisionsCard/MissionAndVisionsCard";
interface MissionAndVisionsProps{
  label: string;
  title: string;
  description: string;
  cards: MissionAndVisionsCardProps[];
};
const MissionAndVisions = ({ label, title, description, cards }:MissionAndVisionsProps ) => {
  return (
    <div className="mission-and-visions">
        <SectionHeader
        label={label}
          title={title}
          description={description}
          titleClassName="mission-title-style"
          descClassName ="mission-desc-style"

        />
        <div className="mission-and-visions-cards">
        {cards.map((card, index) => (
          <MissionAndVisionsCard
            key={index}
            title={card.title}
            description={card.description}
            iconSrc={card.iconSrc}
          />
        ))}
      </div>
    </div>
  )
}

export default MissionAndVisions
