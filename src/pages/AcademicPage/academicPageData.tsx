import { HiChartBar, HiPuzzlePiece } from "react-icons/hi2";
import { FaBookOpen, FaStar } from "react-icons/fa6";
import { BsSunFill } from "react-icons/bs";
import brushIcon from "../../assets/img/academics/brush.svg";
import languageArtsImg from "../../assets/img/academics/Image1.png";
import mathImg from "../../assets/img/academics/Image2.png";
import scienceImg from "../../assets/img/academics/image3.png";
import socialStudiesImg from "../../assets/img/academics/image4.png";
import artsImg from "../../assets/img/academics/image5.png";
import physicalEdImg from "../../assets/img/academics/image6.png";
import classroom1 from "../../assets/img/academics/gallery/classroom/1.png";
import classroom2 from "../../assets/img/academics/gallery/classroom/2.png";
import classroom3 from "../../assets/img/academics/gallery/classroom/3.png";
import classroom4 from "../../assets/img/academics/gallery/classroom/4.png";
import classroom5 from "../../assets/img/academics/gallery/classroom/1.png";
import classroom6 from "../../assets/img/academics/gallery/classroom/2.png";
import library1 from "../../assets/img/academics/gallery/library/1.png";
import library2 from "../../assets/img/academics/gallery/library/2.png";
import library3 from "../../assets/img/academics/gallery/library/3.png";
import library4 from "../../assets/img/academics/gallery/library/4.png";
import library5 from "../../assets/img/academics/gallery/library/1.png";
import library6 from "../../assets/img/academics/gallery/library/2.png";
import scienceLab1 from "../../assets/img/academics/gallery/scienceLab/1.png";
import scienceLab2 from "../../assets/img/academics/gallery/scienceLab/2.png";
import scienceLab3 from "../../assets/img/academics/gallery/scienceLab/3.png";
import scienceLab4 from "../../assets/img/academics/gallery/scienceLab/4.png";
import scienceLab5 from "../../assets/img/academics/gallery/scienceLab/1.png";
import scienceLab6 from "../../assets/img/academics/gallery/scienceLab/2.png";
import computerLab1 from "../../assets/img/academics/gallery/computerLab/1.png";
import computerLab2 from "../../assets/img/academics/gallery/computerLab/2.png";
import computerLab3 from "../../assets/img/academics/gallery/computerLab/3.png";
import computerLab4 from "../../assets/img/academics/gallery/computerLab/4.png";
import computerLab5 from "../../assets/img/academics/gallery/computerLab/1.png";
import computerLab6 from "../../assets/img/academics/gallery/computerLab/2.png";
import garden1 from "../../assets/img/academics/gallery/gardenAndNatureArea/1.png";
import garden2 from "../../assets/img/academics/gallery/gardenAndNatureArea/2.png";
import garden3 from "../../assets/img/academics/gallery/gardenAndNatureArea/3.png";
import garden4 from "../../assets/img/academics/gallery/gardenAndNatureArea/4.png";
import garden5 from "../../assets/img/academics/gallery/gardenAndNatureArea/1.png";
import garden6 from "../../assets/img/academics/gallery/gardenAndNatureArea/2.png";
import type { GalleryCardData } from "../../components/AcademicPageComponents/RoomsGallerySection/RoomGallerySectionType";
export const specialFeaturesData = [
  {
    title: "Thematic Learning",
    description:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    icon: <FaBookOpen />,
  },
  {
    title: "STEAM Education",
    description:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    icon: <HiChartBar />,
  },
  {
    title: "Language Immersion",
    description:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    icon: <HiPuzzlePiece />,
  },
  {
    title: "Art and Creativity",
    description:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    icon: <img src={brushIcon} alt="" />,
  },
  {
    title: "Outdoor Education",
    description:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    icon: <BsSunFill />,
  },
  {
    title: "Play-Based Learning",
    description:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    icon: <FaStar />,
  },
];

export const studentsLearnData = [
  {
    image: languageArtsImg,
    title: "Language Arts",
    description: "Reading, writing, storytelling, and communication skills.",
  },
  {
    image: mathImg,
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    image: scienceImg,
    title: "Science",
    description:
      "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    image: socialStudiesImg,
    title: "Social Studies",
    description:
      "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    image: artsImg,
    title: "Arts and Crafts",
    description: "Encouraging creativity through various art forms and crafts.",
  },
  {
    image: physicalEdImg,
    title: "Physical Education",
    description: "Promoting physical fitness, coordination, and teamwork.",
  },
];

export const academicSpaces: GalleryCardData[] = [
  {
    category: "Classrooms",
    title: "Classrooms",
    description:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [
      classroom1,
      classroom2,
      classroom3,
      classroom4,
      classroom5,
      classroom6,
    ],
  },
  {
    category: "Library",
    title: "Library",
    description:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [library1, library2, library3, library4, library5, library6],
  },
  {
    category: "Science Lab",
    title: "Science Lab",
    description:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [
      scienceLab1,
      scienceLab2,
      scienceLab3,
      scienceLab4,
      scienceLab5,
      scienceLab6,
    ],
  },
  {
    category: "Computer Lab",
    title: "Computer Lab",
    description:
      "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    images: [
      computerLab1,
      computerLab2,
      computerLab3,
      computerLab4,
      computerLab5,
      computerLab6,
    ],
  },
  {
    category: "Garden and Nature Area",
    title: "Garden and Nature Area",
    description:
      "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [garden1, garden2, garden3, garden4, garden5, garden6],
  },
];