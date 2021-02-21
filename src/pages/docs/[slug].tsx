import React, { useEffect, useState } from 'react'
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import { Metadata } from '../../types';
import Layout from 'src/components/Layout';
import { readFilesMetadata } from 'src/utils/readFiles';
import { doStuff } from "src/utils/FireUIJS";

interface Props {
    allData: Metadata[];
    slugs: string[];
    content: string;
    data: Metadata;
}
let lastRender: String = "";
const Docs: React.FC<Props> = ({ content, data, slugs, allData }) => {
    const [path, setPath] = useState('')

    useEffect(() => {
        lastRender = window.location.href
    }, [])
    useEffect(() => {
        if(lastRender !== window.location.href){
            doStuff()
            lastRender = window.location.href
        }
    })
    useEffect(() => {
        setPath(window.location.pathname)
    })
    return (
        <Layout slugs={slugs} allData={allData}>
            <Head>
                <title>{`${data.title} ~ Fire UI`}</title>
                <meta name="title" content = {data.title} />
                <meta property="og:title" content = {data.title} />
                <meta property="twitter:title" content = {data.title} />
                <meta name="description" content={data.description} />
                <meta property="og:description" content = {data.description} />
                <meta property="twitter:description" content = {data.description} />
                {!data.keywords || data.keywords.length === 0 ? null : <meta name="keywords" content={data.keywords.join(',')} />}
                {path === "/docs/slideshow"?
                <script type = "text/javascript" dangerouslySetInnerHTML = {({__html: 
                `var defaultIndex = 1;
                    activeSlide(defaultIndex);
                
                    function btnSlide(n) { activeSlide(defaultIndex += n); }
                    function currentSlide(n) { activeSlide(defaultIndex = n); }
                    function activeSlide(n) {
                        var i;
                        var slides = document.getElementsByClassName("slideshow");
                        var info = document.getElementsByClassName("slideshow-dot");
                        if (n > slides.length) {defaultIndex = 1}
                        if (n < 1) {defaultIndex = slides.length}
                        for (i = 0; i < slides.length; i++) {
                            slides[i].classList.add("slideshow-none");
                        }
                        for (i = 0; i < info.length; i++) {
                            info[i].className = info[i].className.replace(" slideshow-active", "");
                        }
                        if(slides[defaultIndex - 1]) slides[defaultIndex-1].classList.toggle("slideshow-none");
                        if(info[defaultIndex - 1]) info[defaultIndex-1].className += " slideshow-active";
                }`
                })}>
                </script>
                :null}
            </Head>
            <div className="pb-2">
            <a href="https://github.com/fire-ui/" className="github-corner" aria-label="View source on GitHub" title = "View me on GitHub" target="_blank"><svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" className="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path></svg></a>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }: any) => {
    const rawContents = fs.readFileSync(path.join("src", "posts", slug + ".md")).toString();
    const { data, content } = matter(rawContents);
    const files = fs.readdirSync(path.join("src", "posts"));
    const allData = readFilesMetadata(path.join("src", "posts"));
    const slugs = files.map(file => file.replace('.md', ''));

    // console.log("allData: ", allData)
    // console.log("slugs: ", slugs)

    const parsedContent = marked(content);

    //console.log(data);
    return {
        props: {
            allData,
            slugs,
            data,
            content: parsedContent
        }, // will be passed to the page component as props
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const files = fs.readdirSync(path.join('src', 'posts'));
    const paths = files.map(file => ({
        params: { slug: file.replace('.md', '') }
    }));

    //console.log(files);

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}

export default Docs
