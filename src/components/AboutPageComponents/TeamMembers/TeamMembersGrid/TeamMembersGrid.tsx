import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import type {TeamMembersGridProps } from "../TeamMembersType";
import "./TeamMembersGrid.css";


const TeamMembersGrid = ({
  members,
}: TeamMembersGridProps) => {
  return (
      <div className="team-members-grid">
      {members.map((member,index) => (
        <TeamMemberCard
          key={index}
          {...member}
        />
      ))}
    </div>
  )
}

export default TeamMembersGrid
