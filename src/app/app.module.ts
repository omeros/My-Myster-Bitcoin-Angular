import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { BitcoinHeaderComponent } from './cmps/bitcoin-header/bitcoin-header.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SignUpComponent } from './cmps/sign-up/sign-up.component';
import { LogInComponent } from './cmps/log-in/log-in.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactDetailsPageComponent,
    ContactAppComponent,
    BitcoinHeaderComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactEditPageComponent,
    StatisticPageComponent,
    SignUpPageComponent,
    SignUpComponent,
    LogInComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
