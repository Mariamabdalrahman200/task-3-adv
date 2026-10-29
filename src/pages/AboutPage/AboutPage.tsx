import MissionAndVisions from "../../components/AboutPageComponents/MissionAndVisions/MissionAndVisions";
import type { MissionAndVisionsCardProps } from "../../components/AboutPageComponents/MissionAndVisions/MissionAndVisions.types";
import Container from "../../components/Container/Container";
import PageHero from "../../components/shared/PageHero/PageHero";
import missionIcon from "../../assets/img/about/mission-icon.svg";
import visionIcon from "../../assets/img/about/vision-icon.svg";
import OurAwards from "../../components/AboutPageComponents/OurAwards/OurAwards";
import type { IconCardProps } from "../../components/shared/IconCard/IconCard.types";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { HiChartBar, HiChartPie } from "react-icons/hi2";
import { IoFlash } from "react-icons/io5";
import OurHistory from "../../components/AboutPageComponents/OurHistory/OurHistory";
import TeamMembers from "../../components/AboutPageComponents/TeamMembers/TeamMembers";
import type { TeamMemberCardProps } from "../../components/AboutPageComponents/TeamMembers/TeamMembersType";
import saraPhoto from "../../assets/img/about/sarah.png";
import davidPhoto from "../../assets/img/about/david.png";
import emilyPhoto from "../../assets/img/about/emily.png";
import jessicaPhoto from "../../assets/img/about/jessica.png";
import michaelPhoto from "../../assets/img/about/michael.png";
import williamPhoto from "../../assets/img/about/william.png";
import mIcon from "../../assets/img/about/message-icon.svg";


const missionAndVisionsCards: MissionAndVisionsCardProps[] = [
  {
    title: "Mission",
    description:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
    iconSrc: missionIcon,
  },
  {
    title: "Vision",
    description:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    iconSrc: visionIcon,
  },
];

const awardsCards: IconCardProps[] = [
  {
    title: "Outstanding Early Childhood Education Awar",
    description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon:<HiChartPie />,
  },
  {
    title: "Innovative STEAM Education Award",
    description: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: <HiChartBar />,
  },
  {
    title: "Environmental Stewardship Award",
    description: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    icon: <IoFlash />,
  },
   {
    title: "Outstanding Early Childhood Education Awar",
    description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon:<HiChartPie />,
  },
  { title: "Outstanding Early Childhood Education Awar",
    description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon:<HiChartPie />,
  },
  { title: "Outstanding Early Childhood Education Awar",
    description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon:<HiChartPie />,
  },
   
];



const historyItems = [
  {
    year: "2023",
    title: "Resilience and Future Horizons",
    description: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    year: "2017",
    title: "Innovation and Technology",
    description: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: "2012",
    title: "Expansion and Recognition",
    description: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    year: "2005",
    title: "Inception and Growth",
    description: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];


const teamMembersData: TeamMemberCardProps[] = [
  {
    name: "Ms. Sarah Anderson",
    image: saraPhoto,
    icon: mIcon,
    qualification: "Qualification:Bachelor's Degree in Early Childhood Education",
    description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    name: "Mr. David Roberts",
    image: davidPhoto,
   icon: mIcon,
    qualification: "Qualification: Master's Degree in Elementary Education",
    description: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    name: "Ms. Emily Hernandez",
    image: emilyPhoto,
   icon: mIcon,
    qualification: "Qualification: Diploma in Child Psychology",
    description: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    name: "Mr. Michael Turner",
    image: michaelPhoto,
   icon: mIcon,
    qualification: "Qualification: Bachelor's Degree in Physical Education",
    description: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
   {
    name: "Ms. Jessica Lee",
    image: jessicaPhoto,
   icon: mIcon,
    qualification: "Qualification: Master's Degree in Special Education",
    description: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
   {
    name: "Mr. William Parker",
    image: williamPhoto,
   icon: mIcon,
    qualification: "Qualification: Bachelor's Degree in Fine Arts",
    description: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  }
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        labelText="Overview"
        title="Welcome to Little Learners Academy"
        description="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <Container>
        <MissionAndVisions
          label="Mission & Visions"
          title="Our Mission & Visions"
          description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
          cards={missionAndVisionsCards}
        />
        <OurAwards
          label="Our Achievements"
          title="Our Awards and Recognitions"
          description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
          cards={awardsCards}
          moreLabel="8 More Awards"
          previousIcon={<LuArrowLeft />}
          nextIcon={<LuArrowRight />}
        />

        <OurHistory 
        label="Our Progressive Journey"
        title="Our History"
        description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        items ={historyItems}
        />

        <TeamMembers 
        label="Our Teachers With Experties"
        title="Our Team Members"
        description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        members={teamMembersData}
        />
      </Container>
    </>
  );
};

export default AboutPage;
