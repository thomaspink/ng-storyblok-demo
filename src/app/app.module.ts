import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SbModule } from 'ng-storyblok';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { TeaserComponent } from './news/teaser/teaser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NewsComponent,
    TeaserComponent
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
    MaterialModule.forRoot(),
    SbModule.forRoot({
      accessToken: 'TI4mZJKY6rPnyrOQS6u3bAtt'
    }),
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
