import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {SectionComponent} from './section/section.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { BlogComponent } from './blog/blog.component';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DocInfoService} from './doc-info.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { BodyComponent } from './body/body.component'

const approutes:Routes=[
  { path: 'body', component: BodyComponent},
  { path: 'doctorsdetails', component: DoctorsDetailsComponent },
  {path:'',redirectTo:'body',pathMatch:'full'}
   
 
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SectionComponent,
    DoctorsComponent,
    ClinicsComponent,
    BlogComponent,
    DoctorsDetailsComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(approutes)
  ],
  providers: [DocInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
