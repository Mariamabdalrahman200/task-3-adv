import IconCard from "../../../shared/IconCard/IconCard";
import type { IconCardProps } from "../../../shared/IconCard/IconCard.types";
import "./SpecialFeaturesGrid.css";
interface SpecialFeaturesGridProps{
     cards: IconCardProps[];
}

const SpecialFeaturesGrid = ({cards }:SpecialFeaturesGridProps) => {
  return (
   <div className="special-features-grid">
      {cards.map((feature, index) => (
        <IconCard 
          key={index} 
          {...feature} 
        />
      ))}
    </div>
  )
}

export default SpecialFeaturesGrid
