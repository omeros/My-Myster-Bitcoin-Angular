import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [

  { path: 'contact/:id', component: ContactDetailsPageComponent},
  { path : 'edit/:id', component: ContactEditPageComponent },
    { path : 'edit', component: ContactEditPageComponent },
    { path : 'sign-up', component: SignUpPageComponent },
    { path : 'statistics', component: StatisticPageComponent },
    { path : 'contacts', component: ContactAppComponent },
    { path: '', component: HomePageComponent},



];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],    // add hash to be able to upload to github pages
  exports: [RouterModule]
})
export class AppRoutingModule { }
