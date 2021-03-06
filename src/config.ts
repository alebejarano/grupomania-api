import { Comment } from './posts/comment.entity';
import { Post } from './posts/post.entity';
import { User } from './users/user.entity';

//configuration file, that returns an object
export const config = () => ({
  appUrl: process.env.APP_URL,
  database: {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    entities: [User, Post, Comment],
  },
});
