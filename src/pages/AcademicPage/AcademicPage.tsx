
import PageHero from '../../components/shared/PageHero/PageHero';
import Container from '../../components/Container/Container';
import SpecialFeatures from '../../components/AcademicPageComponents/SpecialFeatures/SpecialFeatures';
import { HiChartBar, HiPuzzlePiece } from 'react-icons/hi2';
import { FaBookOpen, FaStar } from 'react-icons/fa6';
import { BsSunFill } from 'react-icons/bs';
import brushIcon from "../../assets/img/academics/brush.svg";
import languageArtsImg from "../../assets/img/academics/Image1.png"
import mathImg from "../../assets/img/academics/Image2.png"
import scienceImg from "../../assets/img/academics/image3.png"
import socialStudiesImg from "../../assets/img/academics/image4.png"
import artsImg from "../../assets/img/academics/image5.png"
import physicalEdImg from "../../assets/img/academics/image6.png"
import classroom1 from "../../assets/img/academics/gallery/classroom/1.png"
import classroom2 from "../../assets/img/academics/gallery/classroom/2.png"
import classroom3 from "../../assets/img/academics/gallery/classroom/3.png"
import classroom4 from "../../assets/img/academics/gallery/classroom/4.png"
import classroom5 from "../../assets/img/academics/gallery/classroom/1.png"
import classroom6 from "../../assets/img/academics/gallery/classroom/2.png"
import StudentsLearnSection from '../../components/AcademicPageComponents/StudentsLearnSection/StudentsLearnSection';
import type { GalleryCardProps } from '../../components/AcademicPageComponents/RoomsGallerySection/RoomGallerySectionType';
const specialFeaturesData = [
  {
    title: "Thematic Learning",
    description: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    icon: <FaBookOpen />,
  },
  {
    title: "STEAM Education",
    description: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    icon: <HiChartBar />,
  },
  {
    title: "Language Immersion",
    description: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    icon: <HiPuzzlePiece />,
  },
  {
    title: "Art and Creativity",
    description: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    icon: <img src={brushIcon} alt='' />,
  },
  {
    title: "Outdoor Education",
    description: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    icon: <BsSunFill />,
  },
  {
    title: "Play-Based Learning",
    description: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    icon: <FaStar />,
  },
];


const studentsLearnData = [
  {
    image: languageArtsImg,
    title: "Language Arts",
     description: "Reading, writing, storytelling, and communication skills."
  },
  {
    image: mathImg,
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic."
  },
  {
    image: scienceImg,
    title: "Science",
     description: "Exploring the natural world through hands-on experiments and investigations."
  },
  {
    image: socialStudiesImg,
    title: "Social Studies",
     description: "Cultivating an understanding of diverse cultures and communities."
  },
  {
    image: artsImg,
    title: "Arts and Crafts",
     description: "Encouraging creativity through various art forms and crafts."
  },
  {
    image: physicalEdImg,
    title: "Physical Education",
     description: "Promoting physical fitness, coordination, and teamwork."
  }
];


const academicSpaces: GalleryCardProps[] = [
  {
    category: "classrooms",
    title: "Classrooms",
    description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [
      classroom1,
      classroom2,
      classroom3,
      classroom4,
      classroom5,
      classroom6
    ],
  },
 
];

const AcademicPage = () => {
 return (
    <>
      <PageHero
        labelText="Academics"
        title="Nurturing Young Minds for Success"
        description="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <Container>
        <SpecialFeatures 
         label="Our Features"
        title="Our Special Features"
         description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
         cards={specialFeaturesData}
        /> 

        <StudentsLearnSection  
         label="Our Features"
        title="What Students Learn"
        description='At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include'
       cards={studentsLearnData}
       />
    

     

      </Container>
    </>
  );
}

export default AcademicPage
