import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
    return (
        <div className="sidenav theme-reverse" id="about">
            <div className="sidenav-content">
                <span className="sidenav-close-btn" data-target="about">&times;</span>
                <h1 className="sidenav-title">About us</h1>
                <p className="about-text">Quickly design your website with Fire UI, an open-source project aimed to contain everything that is frequently used on the frontend.
                Fire UI supports a single folder for certain features to reduce CSS file size.</p>
                <p>License: <Link href="https://github.com/kimlimjustin/fire-ui/blob/master/LICENSE"><a className="link">MIT</a></Link></p>
                <p>Support creator by <Link href="https://github.com/kimlimjustin/fire-ui"><a className="link">give a star on GitHub</a></Link></p>
            </div>
        </div>
    )
}

export default AboutUs
