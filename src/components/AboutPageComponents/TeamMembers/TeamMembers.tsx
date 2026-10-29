import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import "./TeamMembers.css";
import TeamMembersGrid from "./TeamMembersGrid/TeamMembersGrid";
import type { TeamMembersGridProps } from "./TeamMembersType";
interface TeamMembersProps extends TeamMembersGridProps{
  label: string;
  title: string;
  description: string;
};

const TeamMembers = ({label, title, description, members}: TeamMembersProps) => {
  return (
    <div className="team-members">

            <SectionHeader
        label={label}
        title={title}
        description={description}
        titleClassName="members-title-style"
        descClassName ="members-desc-style"
      />
      <TeamMembersGrid 
      members={members}
      />
    </div>
  )
}

export default TeamMembers
