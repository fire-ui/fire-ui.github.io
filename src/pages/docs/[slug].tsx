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
