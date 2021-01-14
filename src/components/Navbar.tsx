import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="topnav theme-reverse topnav-shadow">
            <span className="topnav-brand">Fire UI</span>
            <span className="topnav-hamburger-menu" data-target="topnav-list">&#x2630;</span>
            <div className="topnav-right" id="topnav-list">
                <Link href="/docs/introduction">
                    <a className="topnav-item">Docs</a>
                </Link>
                <Link href="https://github.com/fire-ui/fire-ui">
                    <a className="topnav-item">Github</a>
                </Link>
                <Link href="/docs/download#examples">
                    <a className="topnav-item" >Example</a>
                </Link>
                <span className="topnav-item sidenav-menu-btn" data-target="about">About</span>
                <span className="topnav-item" data-switch-theme="light, dark, aqua, sky, phoenix, indigo, teal">Switch Theme</span>
            </div>
        </div>
    )
}

export default Navbar
