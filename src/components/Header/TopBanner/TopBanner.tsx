import type { TopBannerProps } from '../../../interfaces';
import './TopBanner.css';

const TopBanner = ({topBannerImg,content,icon}: TopBannerProps) => {
  return (
   <div className="top-banner-container">
      <img src={topBannerImg} alt="Top Banner" className="top-banner-img" />
      <div className="top-banner-content">
        <span className='text-medium-20'>{content}</span>
        {icon}
      </div>
    </div>
  )
}

export default TopBanner
