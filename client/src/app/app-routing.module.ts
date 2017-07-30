import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { CuratedListComponent } from './component/curated-list/curated-list.component';
import { SubmitButtonComponent } from './component/submit-button/submit-button.component';
import { SearchBarComponent } from "./component/search-bar/search-bar.component";
import {RomanceComponent} from "./component/romance/romance.component";
import {NovelComponent} from "./component/novel/novel.component";
 const routes: Routes =
       [
           { path: 'about', component: AboutComponent},
           { path: 'curated-list', component: CuratedListComponent },
           { path: 'romance', component: RomanceComponent },
            { path: 'novel', component: NovelComponent },
           { path: 'submit-button', component: SubmitButtonComponent },
           { path: 'search-bar', component: SearchBarComponent},
           { path: '', pathMatch: 'full', redirectTo: 'about' },
           { path: '**', pathMatch: 'full', redirectTo: 'about' },
           

       ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
 
