import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {SectionComponent} from './section/section.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { BlogComponent } from './blog/blog.component'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SectionComponent,
    DoctorsComponent,
    ClinicsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
