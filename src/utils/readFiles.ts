import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Metadata } from '../types';

export const readFilesMetadata = (dirname: string) => {
    const files = fs.readdirSync(dirname);
    const filesMetadata: Metadata[] = [];
    files.forEach(file => {
        const rawContents = fs.readFileSync(path.join(dirname, file)).toString();
        filesMetadata.push(matter(rawContents).data as Metadata)
    })
    return filesMetadata;
}