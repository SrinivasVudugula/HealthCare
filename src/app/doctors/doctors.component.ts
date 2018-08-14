import { Component, OnInit,NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent{
doctorslist: any[] = [
{img :"./assets/images/doctor-1.jpg",name:'SARAH',degination:'GYNOCOLOGY'},
{img :"./assets/images/doctor-2.jpg",name:'ADWIN',degination:'ORTHOSURGON'},
{img :"./assets/images/doctor-3.jpg",name:'MEGHA',degination:'GYNOCOLOGY & SURGON'},
{img :"./assets/images/doctor-4.jpg",name:'JHON',degination:'PEDIATRICS'}

]
text: any[] = [
  {heading:'FAMOUS DOCTOR',message:'Lorem Ipsum is simply dummy text of the printing and typesetting in Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',link:'SHOW ALL'}
]

 
}
