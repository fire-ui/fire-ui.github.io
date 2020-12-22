import Link from 'next/link'
import React from 'react'
import { DocsCategory, Metadata } from 'src/types'

interface Props {
    allData: Metadata[];
    slugs: string[];
}

export interface ComponentsDataType {
    title: string;
    priority: number;
    slug: string;
    category: DocsCategory;
}

const SideNavbar: React.FC<Props> = ({ allData, slugs }) => {

    const componentsData: ComponentsDataType[] = []
    for (let i = 0; i < allData.length; i++) {
        let theData = {
            title: allData[i].title,
            priority: allData[i].priority,
            slug: slugs[i],
            category: allData[i].category
        }

        componentsData.push(theData)
    }

    const sortedComponentsData = [...componentsData].sort((a, b) => b.priority - a.priority)
    console.log(sortedComponentsData)

    const gettingStartedPosts = sortedComponentsData.filter(data => data.category === "getting-started");
    const layoutPosts = sortedComponentsData.filter(data => data.category === "layout");
    const componentsPosts = sortedComponentsData.filter(data => data.category === "components");
    return (
        <div className="fixed-sidenav theme-reverse">
            <Link href="/">
                <a className="fixed-sidenav-item sidenav-title" >Fire UI</a>
            </Link>
            <span className="fixed-sidenav-dropdown-btn" data-dropdown="gettingStarted">Getting Started <span className="dropdown-icon"></span></span>
            <div className="fixed-sidenav-dropdown-content" id="gettingStarted">
                {gettingStartedPosts.map(({ slug, title }) => (
                    <Link href={slug}>
                        <a className="fixed-sidenav-item" href="../getting-started/customize.html">{title}</a>
                    </Link>
                ))}
            </div>
            <span className="fixed-sidenav-dropdown-btn" data-dropdown="layout">Layout <span className="dropdown-icon"></span></span>
            <div className="fixed-sidenav-dropdown-content" id="layout">
                {layoutPosts.map(({ slug, title }) => (
                    <Link href={slug}>
                        <a className="fixed-sidenav-item" href="../getting-started/customize.html">{title}</a>
                    </Link>
                ))}
            </div>
            <span className="fixed-sidenav-dropdown-btn" data-dropdown="component">Components <span className="dropdown-icon"></span></span>
            <div className="fixed-sidenav-dropdown-content fixed-sidenav-dropdown-active" id="component">
                {componentsPosts.map(({ slug, title }) => (
                    <Link href={slug}>
                        <a className="fixed-sidenav-item" href="../getting-started/customize.html">{title}</a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNavbar
