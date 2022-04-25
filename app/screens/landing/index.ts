import fs from 'fs';
import path from 'path';
import pug from 'pug';
import { distDir } from '../../config';
import { IPostData } from '../post';

const template = pug.compileFile(path.resolve(__dirname, 'landing.pug'));

export function BuildLanding(posts: IPostData[]) {
  return fs.writeFileSync(path.join(distDir, 'index.html'), template({ posts }));
}