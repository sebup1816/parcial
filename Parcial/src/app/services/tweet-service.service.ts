import { Injectable } from '@angular/core';
import { ALL_TWEETS } from '../mockinfo/tweets.db.mock'
import {Tweet} from '../models/tweet.model'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  myTweet;

  constructor() {
    this.myTweet = {
      id: -1,
      texto: '',
      autor: '',
      date: new Date(),
      likes: 0,
      comments: 0
    }
  }

  getAllTweets(): Observable<Tweet[]>{
    return of (ALL_TWEETS);
  }

  addTweet(texto,autor) {
    this.myTweet.texto=texto;
    this.myTweet.autor=autor;
    this.myTweet.date=new Date();
    this.myTweet.likes=Math.floor(Math.random() * (100 - 10 + 1)) + 0;
    this.myTweet.comments=Math.floor(Math.random() * (100 - 10 + 1)) + 0;
    this.myTweet.id = Math.floor(Math.random() * (100 - 10 + 1)) + 0;
    ALL_TWEETS.push(this.myTweet);
    this.myTweet = new Tweet();
  }
}
