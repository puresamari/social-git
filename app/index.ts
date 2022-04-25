import path from 'path';
import fs from 'fs';

import { postsDir } from './config';
import { BuildPost, CollectPostData } from './screens/post';
import { BuildLanding } from './screens/landing';

const postIds = fs.readdirSync(postsDir).map(CollectPostData);

postIds.forEach(post => BuildPost(post));
BuildLanding(postIds.slice(0, 9));