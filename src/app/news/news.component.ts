import { Component } from '@angular/core';
import { SBStore, SBStory, SBComponent } from 'ng-storyblok';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  components: any;
  isLoading = true;
  isLoadingError = false;

  constructor(private _sb: SBStore) {
    this._sb.story('news').map((data: SBStory) => <SBComponent[]>data.content.model.components).subscribe(cl => {
      this.components = cl;
      this.isLoading = false;
      this.isLoadingError = false;
    }, error => {
      this.isLoading = false;
      this.isLoadingError = true;
    });
    // this.news =  this._sb.collection('archive');
  }

}
