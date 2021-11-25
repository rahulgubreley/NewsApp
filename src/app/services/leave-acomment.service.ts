import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { api } from '../entities/api';
import { comment } from '../entities/comment';

@Injectable({
  providedIn: 'root'
})
export class LeaveACommentService {

  constructor(private Http: HttpClient) { }

  public commentService(payload: comment, id: any) : Observable<comment>{
    console.log("In commentService");
    let url = api.url + '/add_comment';
    return this.Http.post(url, {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      id: id,
    }).pipe(map((res:any) => {
      return res;
    }));

  }
}
