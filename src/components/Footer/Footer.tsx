import FooterPageColumn from "./FooterPageColumn/FooterPageColumn";
import type { FooterPageColumnProps } from "./FooterTypes";
import "./Footer.css";
import type { ReactNode } from "react";
interface ContactItem {
  icon: React.ReactNode;
  text: string;
}

interface FooterProps {
  logoSrc: string;
  description: string;
  contactData: ContactItem[];
  pagesCardsData: FooterPageColumnProps[];
  legalLinks: string[];
  socialLinks: ReactNode[];
  copyright: string;
}
const Footer = ({
  logoSrc,
  description,
  contactData,
  pagesCardsData,
  legalLinks,
  socialLinks,
  copyright,
}: FooterProps) => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <div className="brand-info">
            <img className="footer-logo" src={logoSrc} alt="Logo" />

            <p className="brand-info-text">{description}</p>
          </div>
          <div className="contact-info">
            {contactData.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-right">
          {pagesCardsData.map((column, index) => (
            <FooterPageColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-divider"></div>

          <div className="footer-legal-social">
            <div className="footer-legal">
              {legalLinks.map((link, index) => (
                <span className="footer-legal-item" key={index}>
                  {link}
                </span>
              ))}
            </div>

            <div className="footer-social">
              {socialLinks.map((icon, index) => (
                <div className="social-icon" key={index}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="footer-divider"></div>

          <p className="footer-copyright">{copyright}</p>
        </div>
      
    </footer>
  );
};

export default Footer;
