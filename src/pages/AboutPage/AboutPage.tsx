import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import MissionAndVisions from "../../components/AboutPageComponents/MissionAndVisions/MissionAndVisions";
import OurAwards from "../../components/AboutPageComponents/OurAwards/OurAwards";
import Container from "../../components/Container/Container";
import PageHero from "../../components/shared/PageHero/PageHero";
import { awardsCards, historyItems, missionAndVisionsCards, teamMembersData } from "./AboutPageData";
import OurHistory from "../../components/AboutPageComponents/OurHistory/OurHistory";
import TeamMembers from "../../components/AboutPageComponents/TeamMembers/TeamMembers";


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
