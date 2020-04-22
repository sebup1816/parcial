import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { BackService} from '../services/back.service';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent{


  myTweets; 
  Tweets = [];
  count = -1;
  
  /*constructor() {
    this.myTweet = {
      id: -1,
      texto: '',
      autor: '',
      date: new Date(),
      likes: 0,
      comments: 0
    }
    this.count = 0;
  }*/

  constructor(private postsService: BackService){
    this.getTweets;
  }
  
  getTweets(){
    //this.myTweets=this.postsService.getAllTweets;
  }

  /*addTweet() {
    this.myTweet.date=new Date();
    this.myTweet.likes=Math.floor(Math.random() * (100 - 10 + 1)) + 0;
    this.myTweet.comments=Math.floor(Math.random() * (100 - 10 + 1)) + 0;
    this.myTweet.id = this.count++;
    this.Tweets.push(this.myTweet);
    this.myTweet = new Tweet();
  }*/
}
