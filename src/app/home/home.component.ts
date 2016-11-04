import { Component } from '@angular/core';
import { SBAdapter, SBStory, SBComponent } from 'ng-storyblok';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  story: Observable<SBComponent>;
  isLoading = true;
  isLoadingError = false;

  constructor(private _sb: SBAdapter) {
    this.story = this._sb.loadStoryBySlug('home').map((data: SBStory) => data.content.data);
    this.story.subscribe(
      _ => this.isLoadingError = false,
      error => this.isLoadingError = true,
      () => this.isLoading = false
    );
  }

}
