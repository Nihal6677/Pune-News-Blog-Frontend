import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../model/Comment';
import { PostapiService } from '../service/postapi.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent {
  comment:any;
  commentId:any;
  constructor(private router:Router, private service:PostapiService, private activatedRoute:ActivatedRoute)
  {
    this.commentId = this.activatedRoute.snapshot.params['commentId'];
    //alert(this.commentId);
    this.service.getCommentBycommentId(this.commentId).subscribe(
      (response) =>{this.comment=response; console.log(response);}
    );
  }


  updateComment(commentId:any,content:any)
  {
    this.comment=new Comment(commentId,content);
    //this.service.updateComment(this.comment).subscribe(
    //  response =>{console.log(response);}
    //);

    console.log(this.comment);
  
  }

}
