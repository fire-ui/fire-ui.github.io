import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import React from 'react'
import { readFilesMetadata } from '../../utils/readFiles';
import { Metadata } from '../../types';
import { useRouter } from 'next/router';

interface Props {
    slugs: string[];
    data: Metadata[];
}

const BlogIndex: React.FC<Props> = ({ data, slugs }) => {

    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, href: string) => {
        router.push(href);
    }

    return (
        <div>
            {data.map(({ description, title, previewImage }, index) => (
                <div key={title} className="card card-hover my-3 mx-3" onClick={
                    e => handleClick(e, '/blogs/' + slugs[index])
                }>
                    <div className="card-body">
                        <img className="card-img-top mb-3" src={previewImage} style={{ height: "120px", width: "auto" }} />

                        <h4 className="card-title m-0">{title}</h4>
                        <p className="card-text small">{description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const files = fs.readdirSync(path.join("src", "posts"));
    const data = readFilesMetadata(path.join("src", "posts"));
    const slugs = files.map(file => file.replace('.md', ''));

    console.log(data);

    return {
        props: { slugs, data }, // will be passed to the page component as props
    }
}

export default BlogIndex
