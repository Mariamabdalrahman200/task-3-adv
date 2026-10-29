import type { IconCardProps } from "../../shared/IconCard/IconCard.types";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import "./SpecialFeatures.css";
import SpecialFeaturesGrid from "./SpecialFeaturesGrid/SpecialFeaturesGrid";
interface SpecialFeaturesProps{
  label: string;
  title: string;
  description: string;
  cards: IconCardProps[];
};
const SpecialFeatures = ({ label, title, description, cards }:SpecialFeaturesProps) => {
  return (
    <div className="special-features">
        <SectionHeader
        label={label}
          title={title}
          description={description}
          titleClassName="features-title-style"
          descClassName ="features-desc-style"
          

        />
        <SpecialFeaturesGrid cards={cards} />
    </div>
  )
}

export default SpecialFeatures
