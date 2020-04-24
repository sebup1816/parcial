import { Tweet } from '../models/tweet.model';

export const ALL_TWEETS: Tweet[] = [
    {
        id: 1,
        texto: 'This is the first tweet',
        autor: 'seb',
        date: new Date(5 / 7 / 2019),
        likes: Math.floor(Math.random() * (100 - 10 + 1)) + 0,
        comments: Math.floor(Math.random() * (100 - 10 + 1)) + 0
    },
    {
        id: 2,
        texto: 'This is the second tweet',
        autor: 'seb',
        date: new Date(5 / 7 / 2019),
        likes: Math.floor(Math.random() * (100 - 10 + 1)) + 0,
        comments: Math.floor(Math.random() * (100 - 10 + 1)) + 0
    }
]