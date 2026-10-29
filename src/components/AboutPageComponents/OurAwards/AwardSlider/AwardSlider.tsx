import "./AwardSlider.css";
import IconCard from "../../../shared/IconCard/IconCard"
import type { AwardsSliderProps } from "../OurAwards.types"
import { useRef } from "react";

const AwardSlider = ({
  cards,
  moreLabel,
  previousIcon,
  nextIcon,
}: AwardsSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleNext = () => {
   const slider = sliderRef.current;
    const firstCard = slider!.firstElementChild as HTMLElement;

    const gap = parseFloat(window.getComputedStyle(slider!).gap);
    const step = firstCard.offsetWidth + gap;

    slider!.scrollBy({ left: step, behavior: "smooth" });
  };
  const handlePrev = () => {
    const slider = sliderRef.current;

    const firstCard = slider!.firstElementChild as HTMLElement;
  
    const gap = parseFloat(window.getComputedStyle(slider!).gap);
    const step = firstCard.offsetWidth + gap;

    slider!.scrollBy({ left: -step, behavior: "smooth" });
  };
  return (
      <div className="awards-slider">
      <div className="awards-slider-cards" ref={sliderRef}>
        {cards.map((card, index) => (
          <div
            className="awards-slider-item"
            key={index}
          >
            <IconCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>

     
      <div className="awards-slider-controls">
        <span className="awards-slider-label">
          {moreLabel}
        </span>

        <div className="awards-slider-arrows">
          <button
          type="button"
            className="awards-slider-arrow" onClick={handlePrev}
          >
            {previousIcon}
          </button>

          <button
          type="button"
            className="awards-slider-arrow" onClick={handleNext}
          >
            {nextIcon}
          </button>
        </div>
      </div>

    </div>
  )
}

export default AwardSlider
