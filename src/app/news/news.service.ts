import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { News} from '../news/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  newslist= [
    {title:"First title ", 
     subtitle: "First subtirle",
     category: "sport",
     date: new Date('25-02-2021'),
     content: "Lorem ipsus x10",
     image: "assets/image1.jpg"},
     {title:"Second title ", 
     subtitle: "Second subtirle",
     category: "politics",
     date: new Date('26-02-2021'),
     content: "Lorem ipsufksdjh fjsldk;fjdsak jflksdajf dsfjdskf sdjflksdj flksadj flksd fjsdflkj sdlfjdslkfjsdkfjsadkfjsdakfjsdakfjsalk fjlk jf as/jdf dsafs x10",
     image: "assets/image2.jpg"},
     {title:"Second title ", 
     subtitle: "Second subtirle",
     category: "sport",
     date: new Date('26-02-2021'),
     content: "Lorem ipsufksdjh fjsldk;fjdsak jflksdajf dsfjdskf sdjflksdj flksadj flksd fjsdflkj sdlfjdslkfjsdkfjsadkfjsdakfjsdakfjsalk fjlk jf as/jdf dsafs x10",
     image: "assets/image2.jpg"}
];

 private newsupdated = new Subject<News[]>();

  constructor() { }

  getNewsList(){
    return this.newslist;
    }

    getNewlUpdateListener(){
           return this.newsupdated.asObservable();
    }

    addNews(news: News){
      this.newslist.push(news);
      this.newsupdated.next([...this.newslist])
     }
  
}
