import CornerDecoration from "../CornerDecoration/CornerDecoration";
import SectionLabel from "../SectionLabel/SectionLabel";
import "./PageHero.css";
interface PageHeroProps {
  labelText: string;
  title: string;
  description: string;
}
const PageHero = ({
  labelText,
  title,
  description,
}: PageHeroProps) => {
  return (
    <section className="page-hero">
      <CornerDecoration />
      <div className="page-hero-left">
        <SectionLabel labelText={labelText} />

        <h1 className="page-hero-title">
          {title}
        </h1>
      </div>

      <p className="page-hero-description">
        {description}
      </p>
    </section>
  )
}

export default PageHero
