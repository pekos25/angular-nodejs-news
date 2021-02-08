import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {News} from '../news.model';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {
  
  model: NgbDateStruct;
  

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
   
  }

  onAddNews(form : NgForm){
       const news :News = {
        title : form.value.title,
        subtitle: form.value.subtitle,
        category: form.value.category,
        date: form.value.date,
        image: form.value.image,
        content: form.value.content,
       };
      this.newsService.addNews(news)
       form.resetForm();
  }

}
