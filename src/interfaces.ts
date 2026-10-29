export interface NavItemInterface {
    content: string,
    route: string
}

export interface NavBarProps{
    logoIcon: string
    items: Array<NavItemInterface>
    btn: string
}
export interface TopBannerProps{
    topBannerImg: string
    content: string
    icon: React.ReactNode;

}