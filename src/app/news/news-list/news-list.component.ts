import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService} from '../news.service';
import {News} from '../news.model';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit,OnDestroy {

   newslist: News[] = [] ;
   private NewsSub: Subscription;

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.newslist = this.newsService.getNewsList();
    this.NewsSub = this.newsService.getNewlUpdateListener()
    .subscribe((news: News[]) => {
      this.newslist = news;
    } );
  }

  opennewpage(){
    console.log('open new page')
  }

  getColor(category){
    switch (category.toLowerCase()) {
      case 'sport':
        return 'green';
      case 'busines':
        return 'blue';
      case 'world news':
        return 'red';
      default : 
       return 'yellow'
    }
  }

  ngOnDestroy(){
    this.NewsSub.unsubscribe()
  }

}
