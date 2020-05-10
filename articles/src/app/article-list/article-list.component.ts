import { Component, OnInit } from '@angular/core';
import ArticleData from '../models/data';
import Article from '../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articles: Article[];

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}
