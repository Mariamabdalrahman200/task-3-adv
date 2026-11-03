import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import RoomsGallerySection from "../../components/AcademicPageComponents/RoomsGallerySection/RoomsGallerySection";
import SpecialFeatures from "../../components/AcademicPageComponents/SpecialFeatures/SpecialFeatures";
import StudentsLearnSection from "../../components/AcademicPageComponents/StudentsLearnSection/StudentsLearnSection";
import Container from "../../components/Container/Container";
import PageHero from "../../components/shared/PageHero/PageHero";
import { academicSpaces, specialFeaturesData, studentsLearnData } from "./academicPageData";

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
          description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
          cards={studentsLearnData}
        />

        <RoomsGallerySection
          label="Our Gallery"
          title="Our Rooms Gallery"
          description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
          cards={academicSpaces}
          prevIcon={<LuArrowLeft />}
          nextIcon={<LuArrowRight />}
        />
      </Container>
    </>
  );
};

export default AcademicPage;
