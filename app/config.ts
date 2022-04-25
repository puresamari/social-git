import path from 'path';
import fs from 'fs';


export const distDir = path.resolve(__dirname, '../', 'dist');

fs.rmSync(distDir, { recursive: true, force: true });

export const distPostsDir = path.resolve(distDir, 'posts');
if (!fs.existsSync(distDir)) { fs.mkdirSync(distDir); }
if (!fs.existsSync(distPostsDir)) { fs.mkdirSync(distPostsDir); }

export const postsDir = path.resolve(__dirname, '../', 'data', 'posts');
