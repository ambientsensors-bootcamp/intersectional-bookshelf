import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubmitButtonComponent } from './component/submit-button/submit-button.component';
import { CuratedListComponent } from './component/curated-list/curated-list.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { MaterialModule } from '@angular/material';
import { AboutComponent } from './component/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RomanceComponent } from './component/romance/romance.component';
import { NovelComponent } from './component/novel/novel.component';
import { YoungsComponent } from './component/youngs/youngs.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CuratedListComponent,
    HeaderComponent,
    SearchBarComponent,
    SubmitButtonComponent,
    RomanceComponent,
    NovelComponent,
    YoungsComponent,


  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
