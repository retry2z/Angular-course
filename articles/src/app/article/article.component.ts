import { Component, OnInit, Input } from '@angular/core';
import Article from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShown: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = true;
  imageBtnTitle: string = 'Show Image';


  constructor() {
    this.articleDescLen = 0;
    this.descToShown = '';
  }

  readMore(): void {
    this.articleDescLen += 250;

    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShown = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  hideDesc(): void {
    this.descToShown = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }


  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageBtnTitle = this.imageBtnTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }


  ngOnInit(): void {
  }
}
