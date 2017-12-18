import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  MatProgressSpinnerModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import { SBModule } from 'ng-storyblok';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { TeaserComponent } from './news/teaser/teaser.component';
import { MarkdownPipe } from './markdown.pipe';
import { PageIntroComponent } from './components/page-intro/page-intro.component';
import { NewsListComponent } from './components/news-list/news-list.component';

export function storyblockConfigFactory() {
  return {
    accessToken: 'TI4mZJKY6rPnyrOQS6u3bAtt',
    map: {
      'intro': PageIntroComponent,
      'NewsList': NewsListComponent
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NewsComponent,
    TeaserComponent,
    MarkdownPipe,
    PageIntroComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
    MatProgressSpinnerModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    SBModule.forRoot(storyblockConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PageIntroComponent, NewsListComponent]
})
export class AppModule { }
