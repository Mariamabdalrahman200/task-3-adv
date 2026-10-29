import "./SectionLabel.css";

const SectionLabel = ({ labelText }: { labelText: string }) => {
  return (
      <span className="section-label">
      {labelText}
    </span>
  )
}

export default SectionLabel
