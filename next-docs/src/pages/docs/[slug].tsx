import React from 'react'
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import { Metadata } from '../../types';

interface Props {
    content: string;
    data: Metadata;
}

const Blog: React.FC<Props> = ({ content, data }) => {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="keywords" content={data.keywords.join(',')} />
            </Head>
            <div className="px-4 pb-2">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const rawContents = fs.readFileSync(path.join("src", "posts", slug + ".md")).toString();
    const { data, content } = matter(rawContents);

    const parsedContent = marked(content);

    console.log(data);
    return {
        props: {
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

    console.log(files);

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}

export default Blog
