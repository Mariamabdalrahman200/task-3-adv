import type { TeamMemberCardProps } from "../TeamMembersType";
import "./TeamMemberCard.css";

const TeamMemberCard = ({name,image,icon,qualification,description}:TeamMemberCardProps) => {
  return (
     <div className="team-member-card">
      <div className="team-member-card-header">
     <div className="team-member-profile">
           <img
          className="team-member-card-image"
          src={image}
        />

        <h3 className="team-member-card-name">
          {name}
        </h3>
     </div>

      <img 
  src={icon} 
  className="team-member-card-icon" 
/>
       
      </div>

    
      <div className="team-member-card-body">
        <h4 className="team-member-card-qualification">
          Qualification: {qualification}
        </h4>

        <p className="team-member-card-description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamMemberCard
