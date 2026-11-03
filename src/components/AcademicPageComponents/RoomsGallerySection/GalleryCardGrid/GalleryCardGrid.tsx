import "./GalleryCardGrid.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import type {
  GalleryCardGridProps,
  RoomGalleryCategory,
} from "../RoomGallerySectionType";
import { useState } from "react";
type GalleryFilter = RoomGalleryCategory | "All";
const categories: GalleryFilter[] = [
  "All",
  "Classrooms",
  "Library",
  "Science Lab",
  "Computer Lab",
  "Garden and Nature Area",
];

const GalleryCardGrid = ({
  cards,
  prevIcon,
  nextIcon,
}: GalleryCardGridProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryFilter>("All");

    const displayedCards =
  selectedCategory === "All"
    ? cards
    : cards.filter((card) => card.category === selectedCategory);

  return (
    <div className="gallery-card-grid">
      <div className="gallery-tabs">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`gallery-tab ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {displayedCards.map((card, index) => (
        <GalleryCard
          key={index}
          category={card.category}
          title={card.title}
          description={card.description}
          images={card.images}
          prevIcon={prevIcon}
          nextIcon={nextIcon}
        />
      ))}
    </div>
  );
};

export default GalleryCardGrid;
