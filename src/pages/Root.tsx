import type { NavItemInterface } from '../interfaces'
import logo from "../assets/img/logo.svg";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import top_banner from "../assets/img/top_banner.png";
import arrow from "../assets/img/arrow.svg";
import Footer from '../components/Footer/Footer';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
const footerPagesData = [
  {
    title: 'Home',
    links: ['Features', 'Our Testimonials', 'FAQ']
  },
  {
    title: 'About Us',
    links: ['Our Mission', 'Our Vission', 'Awards and Recognitions', 'History', 'Teachers']
  },
  {
    title: 'Academics',
    links: ['Special Features', 'Gallery']
  },
  {
    title: 'Contact Us',
    links: ['Information', 'Map & Direction']
  }
];
const footerContactData = [
  { 
    icon: <MdEmail />, 
    text: "hello@littlelearners.com" 
  },
  { 
    icon: <FaPhoneAlt  />,
    text: "+91 91813 23 2309" 
  },
  { 
    icon: <FaMapMarkerAlt /> ,
    text: "SSomewhere in the World" 
  }
];

const Root = () => {
     const naveItems: Array<NavItemInterface>=[
        {
            content: "Home",
            route: "/"
        },
         {
            content: "About Us",
            route: "/about"
        },
        {
            content: "Academics",
            route: "/academics"
        },
        {
            content: "Admissions",
            route: "/admissions"
        },
        {
            content: "Student Life",
            route: "student-life"
        },
    ]
  return (
    <>
    <Header
    topBannerImg={top_banner} 
      content="Admission is Open, Grab your seat now  " 
    icon ={<img src={arrow} alt=""/>}
     logoIcon={logo}
     items={naveItems}
     btn='Contact'
    />
    <Outlet />


        <Footer 
      logoSrc={logo}
      description="We believe in the power of play to foster creativity, problem-solving skills, and imagination."
      contactData={footerContactData}
      pagesCardsData={footerPagesData}
      legalLinks={["Terms of Service","Privacy Policy","Cookie Policy"]}
      socialLinks={[<FaFacebook />, <FaTwitter />, <FaLinkedin />]}
      copyright="Copyright © [2023] Little Learners Academy. All rights reserved."


      />
      
    </>
  )
}

export default Root
