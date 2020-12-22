import React from 'react'
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import { Metadata } from '../../types';
import Layout from 'src/components/Layout';
import { readFilesMetadata } from 'src/utils/readFiles';

interface Props {
    allData: Metadata[];
    slugs: string[];
    content: string;
    data: Metadata;
}

const Docs: React.FC<Props> = ({ content, data, slugs, allData }) => {
    return (
        <Layout slugs={slugs} allData={allData}>
            <Head>
                <title>{`${data.title} ~ Fire UI`}</title>
                <meta name="description" content={data.description} />
                {!data.keywords || data.keywords.length === 0 ? null : <meta name="keywords" content={data.keywords.join(',')} />}
            </Head>
            <div className="px-4 pb-2">
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

    console.log(data);
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

    console.log(files);

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}

export default Docs
