import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



import { MainComponent } from './main/main.component';
import { WritePostComponent } from './write-post/write-post.component';
import { SimplePostComponent } from './simple-post/simple-post.component';
import { JobPostComponent } from './job-post/job-post.component';
import { FilterComponent } from './filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSliderModule} from "@angular/material/slider";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,



      MainComponent,
          WritePostComponent,
          SimplePostComponent,
          JobPostComponent,
          FilterComponent,
          LandingPageComponent,


  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
