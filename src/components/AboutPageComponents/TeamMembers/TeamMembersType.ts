

export interface TeamMemberCardProps{
   name: string;
  image: string;
  icon: string;
  qualification: string;
  description: string;
}

export interface TeamMembersGridProps {
  members: TeamMemberCardProps[];
}