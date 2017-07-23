import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubmitButtonComponent } from 
'./component/submit-button/submit-button.component';
import { CuratedListComponent } from 
'./component/curated-list/curated-list.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    CuratedListComponent,
    HeaderComponent,
    SearchBarComponent,
    SubmitButtonComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
