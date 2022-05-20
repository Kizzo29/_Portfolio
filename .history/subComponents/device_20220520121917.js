const size = {
desktop:'1200px',
laptop: '1024px',
tablet: '768px',
mobile: '480px',
nav:'769px'

}

export const device = {
    desktop: `(max-width: ${size.desktop})`,
    laptop: `(max-width: ${size.laptop})`,
    tablet: `(max-width: ${size.tablet})`,
    mobile: `(max-width: ${size.mobile})`,
    nav:`(min-width: ${size.nav})`

}