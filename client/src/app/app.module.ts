import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubmitButtonComponent } from './src/app/component/submit-button/submit-button.component';
import { CuratedListComponent } from './src/app/component/curated-list/curated-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitButtonComponent,
    CuratedListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
