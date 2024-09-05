const size = {
desktop:'1200px',
laptop: '1024px',
tablet: '768px',
mobile: '695px',
nav:'769px',
smallmobile: '450px'
}

export const device = {
    desktop: `(max-width: ${size.desktop})`,
    laptop: `(max-width: ${size.laptop})`,
    tablet: `(max-width: ${size.tablet})`,
    mobile: `(max-width: ${size.mobile})`,
    smallmobile: `(max-width: ${size.smallmobile})`,
    nav:`(min-width: ${size.nav})`

}