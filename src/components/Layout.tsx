import React, { useEffect } from 'react'
import { Metadata } from 'src/types'
import { doStuff } from 'src/utils/FireUIJS'
import SideNavbar from './SideNavbar'

interface Props {
    allData: Metadata[];
    slugs: string[];
}

const Layout: React.FC<Props> = ({ children, allData, slugs }) => {

    useEffect(() => {
        doStuff();
    }, [])
    return (
        <>
            <SideNavbar allData={allData} slugs={slugs} />
            <div className="main-page">
                {children}
            </div>
        </>
    )
}

export default Layout