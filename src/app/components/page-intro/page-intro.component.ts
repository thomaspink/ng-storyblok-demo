import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageIntroComponent {

  @Input('headline') headline = '';
  @Input('text') text = '';
}
