import { Component, OnInit } from '@angular/core';
import { TweetServiceService} from '../services/tweet-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent{

  Tweets;
  textInput: String='';
  autorInput: String='';
  
  
  constructor(private tweetService: TweetServiceService, private router: Router){
    this.getData();
  }

  tweets(){
    return this.Tweets;
  }

  getData(){
    this.tweetService.getAllTweets().subscribe(
       TweetsObs => {
        this.Tweets=TweetsObs;
      }
    );
    //this.Tweets=this.tweetService.getAllTweets();
  }

  addTweet(textInput,autorInput){
    this.tweetService.addTweet(textInput,autorInput);
  }

  /*constructor(private postsService: BackService){
    this.getTweets;
  }
  
  getTweets(){
    //this.myTweets=this.postsService.getAllTweets;
  }*/

  deletTweet(id) {
    for (let i = 0; i < this.Tweets.length; i++) {
      if(id == this.Tweets[i].id){
        this.Tweets.splice (i, 1);
      }      
    }
  }
}
