import { useRef, type ReactNode } from "react";
import type { RoomGalleryCategory } from "../RoomGallerySectionType";
import "./GalleryCard.css";

interface GalleryCardProps {
  category: RoomGalleryCategory;
  title: string;
  description: string;
  images: string[];
  prevIcon: ReactNode;
  nextIcon: ReactNode;
}
const GalleryCard = ({
  title,
  description,
  images,
  prevIcon,
  nextIcon,
}: GalleryCardProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleNext = () => {
  const slider = sliderRef.current;
  const firstImage = slider!.firstElementChild as HTMLElement;
  const gap = parseFloat(window.getComputedStyle(slider!).gap);
  const step = firstImage.offsetWidth + gap;
  slider!.scrollBy({
    left: step,
    behavior: "smooth",
  });
};
const handlePrev = () => {
  const slider = sliderRef.current;
  const firstImage = slider!.firstElementChild as HTMLElement;
  const gap = parseFloat(window.getComputedStyle(slider!).gap);
  const step = firstImage.offsetWidth + gap;
  slider!.scrollBy({
    left: -step,
    behavior: "smooth",
  });
};
  return (
    <div className="gallery-card">
      <div className="gallery-images-grid" ref={sliderRef}>
        {images.map((imgSrc, index) => (
          <div key={index} className="gallery-image-wrapper">
            <img src={imgSrc} alt="" className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="gallery-content-area">
        <div className="gallery-text-content">
          <h3 className="gallery-title">{title}</h3>
          <div className="gallery-nav-buttons">
            <button className="nav-btn prev-btn" onClick={handlePrev}>{prevIcon}</button>
            <button className="nav-btn next-btn" onClick={handleNext}>{nextIcon}</button>
          </div>
        </div>
        <p className="gallery-description">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
