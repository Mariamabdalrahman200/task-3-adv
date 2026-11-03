import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import GalleryCardGrid from "./GalleryCardGrid/GalleryCardGrid";
import type { GalleryCardGridProps } from "./RoomGallerySectionType";
import "./RoomsGallerySection.css";
interface RoomsGallerySectionProps extends GalleryCardGridProps{
   label: string;
  title: string;
  description: string;
};
const RoomsGallerySection = ({ label, title, description,cards, prevIcon, nextIcon }:RoomsGallerySectionProps) => {

  return (
    <div>
        <SectionHeader
        label={label}
        title={title}
        description={description}
        titleClassName="gallery-title-style"
        descClassName ="gallery-desc-style "
      />
   
      <GalleryCardGrid 
      cards={cards}
      prevIcon={prevIcon}
      nextIcon={nextIcon}
      />
    </div>
  )
}

export default RoomsGallerySection
