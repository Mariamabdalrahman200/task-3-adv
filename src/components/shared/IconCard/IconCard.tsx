import "./IconCard.css";
import type { IconCardProps } from "./IconCard.types";


const IconCard = ({
icon,
title,
description,
}: IconCardProps) => {
  return (
    <div className="card">
      <div className="icon-box">
        {icon}
      </div >
      <div className="content">
        <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      </div>
    </div>
  )
}

export default IconCard
