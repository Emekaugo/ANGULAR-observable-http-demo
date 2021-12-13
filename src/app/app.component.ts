import { Component } from '@angular/core';

import { UserService } from '../app/shared/user.service';
import { User } from '../app/shared/user';
import { Observable, Subject } from 'rxjs';

import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";

import { Post } from '../app/shared/post';
import { PostService } from '../app/shared/post.service';
import { HttpService } from '../app/shared/httpservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-scss2';

  USERS = new Array<User>();
  posts = new Array<Post>();
  httpposts : any;

  constructor(
    private userService: UserService,
    private service:PostService,
    private httpService: HttpService,
    ) {}

  ngOnInit(): void {

    this.userService.getUsers().subscribe(res => {
      this.USERS = res;
    });

    this.service.getPosts().subscribe(response => {
      this.posts = response.map(item =>
        {
          return new Post(
              item.body,
              item.id,
              item.title,
              item.userId
          );
        });
    });


    this.httpService.getPosts().subscribe(
      (response) => { this.httpposts = response; },
      (error) => { console.log(error); });

      this.httpService.getPostById();
      this.httpService.addPost(6);
      this.httpService.updatePost(7);
      this.httpService.deletePost();
      this.httpService.deletePost();


  }

}
