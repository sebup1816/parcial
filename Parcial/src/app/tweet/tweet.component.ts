import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { TweetServiceService} from '../services/tweet-service.service';



@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent{

  
  Tweets;
  textInput: String='';
  autorInput: String='';
  
  
  constructor(private tweetService: TweetServiceService){
    this.getData();
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

}
