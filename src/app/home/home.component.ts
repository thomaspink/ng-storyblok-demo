import { Component } from '@angular/core';
import { SBStore, SBStory, SBComponent } from 'ng-storyblok';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  story: any;
  isLoading = true;
  isLoadingError = false;

  constructor(private _sb: SBStore) {
    this.story = this._sb.story('home').map((data: SBStory) => data.content.model);
    this.story.subscribe(
      _ => { this.isLoading = false; this.isLoadingError = false },
      error => { this.isLoading = false; this.isLoadingError = true }
    );
  }

}
