import SectionHeader from "../../shared/SectionHeader/SectionHeader"
import AwardSlider from "./AwardSlider/AwardSlider"
import type { AwardsSliderProps } from "./OurAwards.types";
import "./OurAwards.css";

interface OurAwardsProps
  extends AwardsSliderProps {
  label: string;
  title: string;
  description: string;
  }
const OurAwards = ({
  label,
  title,
  description,
  cards,
  moreLabel,
  previousIcon,
  nextIcon,
}: OurAwardsProps) => {
  return (
      <section className="our-awards">
      <SectionHeader
        label={label}
        title={title}
        description={description}
        titleClassName="awards-title-style"
        descClassName ="awards-desc-style "
      />

      <AwardSlider
        cards={cards}
        moreLabel={moreLabel}
        previousIcon={previousIcon}
        nextIcon={nextIcon}
      />
    </section>
  )
}

export default OurAwards
