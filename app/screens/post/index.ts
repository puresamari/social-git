import fs from 'fs';
import path from 'path';
import pug from 'pug';

import { distPostsDir, postsDir } from '../../config';

const template = pug.compileFile(path.resolve(__dirname, 'post.pug'));
const newTemplate = pug.compileFile(path.resolve(__dirname, 'new.pug'));

export interface IPostData {
  title: string;
  id: string;
}

export function CollectPostData(id: string): IPostData {
  return {
    ...JSON.parse(fs.readFileSync(path.resolve(postsDir, id, 'data.json'), { encoding: 'utf8' })),
    id
  };
}

export function BuildPost(post: IPostData) {
  fs.writeFileSync(path.resolve(distPostsDir, post.id + '.html'), template(post));
}

export function BuildPages(posts: IPostData[]) {
  posts.forEach(BuildPost);
  fs.writeFileSync(path.resolve(distPostsDir, 'new.html'), newTemplate());
}