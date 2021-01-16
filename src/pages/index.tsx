import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AboutUs from "src/components/AboutUs";
import Navbar from "src/components/Navbar";
// @ts-ignore
import loadjs from "loadjs"
import { doStuff } from "src/utils/FireUIJS";

export default function Index() {
  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
    setCurrentUrl(window.location.href)
  })
  useEffect(() => {
    doStuff();
  }, [])

  return (
    <>
      <Head>
        <title>Fire UI</title>
      </Head>
      <Navbar />
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
          <button className="btn btn-dark mr-4">
            <Link href="/docs/introduction">
              <a className="link">Get Started</a>
            </Link>
          </button>
          <button className="btn btn-light">
            <Link href="https://github.com/kimlimjustin/fire-ui">
              <a className="link" target="_blank">Download</a></Link>
          </button>
        </div>
      </div>
      <div className="theme-reverse">
        <div className="container newsletter p-2" id="newsletter">
          <h1 className="box-title mt-5">Subscribe to our newsletter</h1>
          <form action="https://kimlimjustin.herokuapp.com/subscribe" className="row" method="POST">
            <input type="hidden" name="category" value="FireUI"/>
            <input type="hidden" name="prevUrl" value={currentUrl}/>
            <div className="form-group">
              <input type="text" name="email" className="form-control" placeholder="Your email address" />
            </div>
            <div className="form-group">
              <input type="submit" value="Subscribe" className="btn theme-reverse form-control"/>
            </div>
          </form>
        </div>
      </div>
      <AboutUs />
    </>
  )
}
