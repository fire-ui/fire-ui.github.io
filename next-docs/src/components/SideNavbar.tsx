import React from 'react'

const SideNavbar = () => {
    return (
        <div className="fixed-sidenav theme-reverse">
            <a className="fixed-sidenav-item sidenav-title" href="../index.html">Fire UI</a>
            <span className="fixed-sidenav-dropdown-btn" data-dropdown="gettingStarted">Getting Started <span className="dropdown-icon"></span></span>
            <div className="fixed-sidenav-dropdown-content" id="gettingStarted">
                <a className="fixed-sidenav-item" href="../getting-started/introduction.html">Introduction</a>
                <a className="fixed-sidenav-item" href="../getting-started/download.html">Download</a>
                <a className="fixed-sidenav-item" href="../getting-started/customize.html">Customize</a>
            </div>
            <span className="fixed-sidenav-dropdown-btn" data-dropdown="layout">Layout <span className="dropdown-icon"></span></span>
            <div className="fixed-sidenav-dropdown-content" id="layout">
                <a href="../Layout/container.html" className="fixed-sidenav-item">Container</a>
                <a href="../Layout/grid.html" className="fixed-sidenav-item">Grid</a>
            </div>
            <span className="fixed-sidenav-dropdown-btn" data-dropdown="component">Components <span className="dropdown-icon"></span></span>
            <div className="fixed-sidenav-dropdown-content fixed-sidenav-dropdown-active" id="component">
                <a href="../components/accordion.html" className="fixed-sidenav-item">Accordion</a>
                <a href="../components/box.html" className="fixed-sidenav-item">Box</a>
                <a href="../components/buttons.html" className="fixed-sidenav-item">Buttons</a>
                <a href="../components/code.html" className="fixed-sidenav-item">Code</a>
                <a href="../components/color_theme.html" className="fixed-sidenav-item">Color and theme</a>
                <a href="../components/form.html" className="fixed-sidenav-item">Form</a>
                <a href="../components/modal.html" className="fixed-sidenav-item">Modal</a>
                <a href="../components/navbar.html" className="fixed-sidenav-item">Navigation bar</a>
                <a href="../components/table.html" className="fixed-sidenav-item">Table</a>
                <a href="../components/tabs.html" className="fixed-sidenav-item">Tabs</a>
                <a href="../components/tooltip.html" className="fixed-sidenav-item">Tooltip</a>
            </div>
        </div>
    )
}

export default SideNavbar
