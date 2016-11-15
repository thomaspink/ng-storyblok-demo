import { Component } from '@angular/core';
import { SBStore, SBStory, SBComponent } from 'ng-storyblok';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  story: any;
  isLoading = true;
  isLoadingError = false;

  constructor(private _sb: SBStore) {;
    this.story = this._sb.story('news').map((data: SBStory) => data.content.model);
    this.story.subscribe(
      _ => { this.isLoading = false; this.isLoadingError = false },
      error => { this.isLoading = false; this.isLoadingError = true }
    );
  }

}
