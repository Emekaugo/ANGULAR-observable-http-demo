import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
providedIn:  'root'
})
export class HttpService {

  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

constructor(private http: HttpClient) { }

getPosts() {
	return this.http.get(this.url);
  // this.http.get(this.url, { observe: 'response' });
}

public getPostById() {
  let id: number = 1;
  let endPoints = "/posts/" + id;
  this.http.get(this.url + endPoints).subscribe(data => {
    console.log(data);
  });
}

public addPost(postData: Object) {
  let endPoints = "/posts"
  this.http.post(this.url + endPoints, postData).subscribe(data => {
    console.log(data);
  });
}

public updatePost(postData: Object) {
  let endPoints = "/posts/1"
  this.http.put(this.url + endPoints, postData).subscribe(data => {
    console.log(data);
  });
}

public deletePost() {
  let endPoints = "/posts/1"
  this.http.delete(this.url + endPoints).subscribe(data => {
    console.log(data);
  });
}

}
