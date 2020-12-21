import React from 'react'
import SideNavbar from './SideNavbar'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <SideNavbar />
            {children}
        </>
    )
}

export default Layout
