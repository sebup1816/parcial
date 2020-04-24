import { Component, OnInit } from '@angular/core';
import { TweetServiceService} from '../services/tweet-service.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { UserServiceService } from '../services/user-service.service';
>>>>>>> bcc6d7ccac56f3f9318ce353fd8afaeb98bdfcd6



@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent{

  Tweets;
  textInput: String='';
  autorInput: String='';
  userDelete: String='';
  
<<<<<<< HEAD
  
  constructor(private tweetService: TweetServiceService, private router: Router){
=======
  constructor(private tweetService: TweetServiceService, private userService: UserServiceService){
>>>>>>> bcc6d7ccac56f3f9318ce353fd8afaeb98bdfcd6
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

  delete(userDelete){
    this.userService.deleteAccount(userDelete);
    console.log(this.userService.ALL_USERS);
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
