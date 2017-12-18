import { Component, OnInit, Input } from '@angular/core';
import { SBStore } from 'ng-storyblok';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input('path') private path = '';
  news: any;

  constructor(private _store: SBStore ) { }

  ngOnInit() {
    this.news = this._store.collection(this.path);
  }

}
