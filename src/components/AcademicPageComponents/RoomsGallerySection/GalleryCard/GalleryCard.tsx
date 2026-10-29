import type { GalleryCardProps } from "../RoomGallerySectionType";
import "./GalleryCard.css";

const GalleryCard = ({ title, description, images }: GalleryCardProps) => {
  return (
    <div className="gallery-card">
   
      <div className="gallery-images-grid">
        {images.map((imgSrc, index) => (
          <div key={index} className="gallery-image-wrapper">
             <img src={imgSrc} alt='' className="gallery-image" />
          </div>
        ))}
      </div>

     
      <div className="gallery-content-area">
     
        <div className="gallery-text-content">
          <h3 className="gallery-title">{title}</h3>
          <p className="gallery-description">{description}</p>
        </div>

      
        <div className="gallery-nav-buttons">
          <button className="nav-btn prev-btn">
           
          </button>
          <button className="nav-btn next-btn">
          
          </button>
        </div>

      </div>

    </div>
  )
}

export default GalleryCard
