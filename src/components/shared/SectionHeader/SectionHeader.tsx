import SectionLabel from "../SectionLabel/SectionLabel";
import "./SectionHeader.css";export interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  titleClassName: string;
  descClassName: string;
}
const SectionHeader = ({
  label,
  title,
  description,
  titleClassName,
  descClassName
}: SectionHeaderProps) => {
  return (
  <div className="section-header">
<SectionLabel labelText={label} />

    <h2 className={`section-title ${titleClassName}`}>{title}</h2>

    <p className={`section-description ${descClassName}`}>{description}</p>
  </div>

  )
}

export default SectionHeader
