import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import AboutUs from "src/components/AboutUs";
import Navbar from "src/components/Navbar";
// @ts-ignore
import loadjs from "loadjs"
import { doStuff } from "src/utils/FireUIJS";

export default function Index() {

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
      <AboutUs />
    </>
  )
}
