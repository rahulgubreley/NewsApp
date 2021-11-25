import { Component, OnInit } from '@angular/core';
import { NewsDisplayService } from '../services/news-display.service';
import { api } from '../entities/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data : any;
  public url = api.imageurl;
 

  constructor(private newsDisplayService: NewsDisplayService) {
    this.newsDisplayService.displayNewsService().subscribe((res:any) =>{
      console.log(res);
      this.data = res.data.data;
    })
  }

  ngOnInit(): void {
  }

 
};
