import type { FooterPageColumnProps } from "../FooterTypes";
import "./FooterPageColumn.css";


const FooterPageColumn = ({ title, links }: FooterPageColumnProps) => {
  return (
   <div className="footer-page-column">
      <h4 className="column-title">{title}</h4>
      
      <ul className="links-list">
        {links.map((link, index) => (
          <li key={index} className="link-item">
            <a>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterPageColumn
