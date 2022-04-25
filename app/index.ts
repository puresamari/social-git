import path from 'path';
import fs from 'fs';

import { distDir, postsDir } from './config';
import { BuildPages as BuildPostPages, CollectPostData } from './screens/post';
import { BuildLanding } from './screens/landing';

const posts = fs.readdirSync(postsDir).map(CollectPostData);

BuildPostPages(posts);
BuildLanding(posts.slice(0, 9));