

export default function Index() {
  return (
    <>
      <div className="topnav theme-reverse topnav-shadow">
        <span className="topnav-brand">Fire UI</span>
        <span className="topnav-hamburger-menu" data-target="topnav-list">&#x2630;</span>
        <div className="topnav-right" id="topnav-list">
          <a className="topnav-item" href="getting-started/introduction.html">Docs</a>
          <a className="topnav-item" href="https://github.com/kimlimjustin/fire-ui">Github</a>
          <a className="topnav-item" href="">Example</a>
          <span className="topnav-item sidenav-menu-btn" data-target="about">About</span>
          <span className="topnav-item" switch-theme="true">Switch Theme</span>
        </div>
      </div>
      <div className="container main-docs">
        <div className="row">
          <h1 className="main-page-title">Fire UI</h1>
          <div className="main-page-logo">
            <img src="/logo.jpg" alt="Fire UI Logo" />
          </div>
          <h4 className="main-page-description">
            Quickly design your website with Fire UI, an open-source project aimed to contain everything that is frequently used on the frontend.
            Fire UI supports a single folder for certain features to reduce CSS file size.
            </h4>
          <button className="btn btn-dark"><a href="getting-started/introduction.html" className="link">Get Started</a></button>
          <button className="btn btn-light"><a href="https://github.com/kimlimjustin/fire-ui" className="link">Download</a></button>
        </div>
      </div>
      <div className="sidenav theme-reverse" id="about">
        <div className="sidenav-content">
          <span className="sidenav-close-btn" data-target="about">&times;</span>
          <h1 className="sidenav-title">About us</h1>
          <p className="about-text">Quickly design your website with Fire UI, an open-source project aimed to contain everything that is frequently used on the frontend.
                Fire UI supports a single folder for certain features to reduce CSS file size.</p>
          <p>License: <a href="https://github.com/kimlimjustin/fire-ui/blob/master/LICENSE" className="link">MIT</a></p>
          <p>Support creator by <a href="https://github.com/kimlimjustin/fire-ui" className="link">give a star on GitHub</a></p>
        </div>
      </div>
    </>
  )
}
