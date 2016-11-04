import { Component } from '@angular/core';
import { SBAdapter, SBStory, SBComponent } from 'ng-storyblok';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  story: Observable<SBComponent>;
  isLoading = true;
  isLoadingError = false;

  constructor(private _sb: SBAdapter) {
    this.story = this._sb.loadStoryBySlug('news').map((data: SBStory) => data.content.data);
    this.story.subscribe(
      _ => this.isLoadingError = false,
      error => this.isLoadingError = true,
      () => this.isLoading = false
    );
  }

}
