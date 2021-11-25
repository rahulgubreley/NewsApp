import { Component, OnInit } from '@angular/core';
import { api } from '../entities/api';
import {ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { comment } from '../entities/comment';
import { LeaveACommentService } from '../services/leave-acomment.service';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  public data : any ='';
  public url = api.imageurl;
  public name : any ="";
  public tags : any;
  public payload: comment;
  public commentlength : any;
  constructor(private service: BlogPostService, private activatedroute: ActivatedRoute, private commentService: LeaveACommentService) {
    this.name = this.activatedroute.snapshot.paramMap.get('name');
    this.service.blogPostService(this.name).subscribe((res:any)=>{
      this.data = res.data;
      console.log(this.data);
      console.log(this.data.comment);
      this.commentlength  = this.data.comment.length;

 this.payload = {
   name : '',
   email : '',
   message : '',
   id : ''
 }
     })
   }

  ngOnInit(): void {   
  }

  public commentMethod(){
    console.log("comment method1");
  this.commentService.commentService(this.payload, this.data.id).subscribe((res:any) => {
    console.log("commentMethod");
  });
  }

}
