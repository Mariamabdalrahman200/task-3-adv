import "./Header.css"
import TopBanner from "./TopBanner/TopBanner"
import NavBar from "./NavBar/NavBar"
import type { NavBarProps, TopBannerProps } from "../../interfaces"
interface HeaderProps extends NavBarProps, TopBannerProps {}

const Header = ({
  logoIcon,
  items,
  btn,
  topBannerImg,
  content,
  icon,
}: HeaderProps) => {
  return (
    <header>

      <TopBanner  topBannerImg={topBannerImg}
        content={content}
        icon={icon}/>
        <NavBar
          logoIcon={logoIcon}
        items={items}
        btn={btn}
         />

    </header>
  )
}

export default Header
