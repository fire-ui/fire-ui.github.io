import React from 'react'
import SideNavbar from './SideNavbar'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <SideNavbar />
            <div className="main-page">
                {children}
            </div>
        </>
    )
}

export default Layout
