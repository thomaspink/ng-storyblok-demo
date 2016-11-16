import { Component } from '@angular/core';
import { SBStore, SBStory, SBComponent } from 'ng-storyblok';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  components: SBComponent[] = [];
  isLoading = true;
  isLoadingError = false;

  constructor(private _sb: SBStore) {
    this._sb.story('home').map((data: SBStory) => <SBComponent[]>data.content.model.components).subscribe(cl => {
      this.components = cl;
      this.isLoading = false;
      this.isLoadingError = false;
    }, error => {
      this.isLoading = false;
      this.isLoadingError = true;
    });
  }

}
