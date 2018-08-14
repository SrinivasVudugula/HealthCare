import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent {

  cliniclist: any[] = [
    {img :"./assets/images/clinic-1.jpg",name:'ARYAN EYE CLINIC',city:'california',degination:'GYNOCOLOGY'},
    {img :"./assets/images/clinic-2.jpg",name:'ARYAN DENTAL CLINIC',city:'texas',degination:'ORTHOSURGON'},
    {img :"./assets/images/clinic-3.jpg",name:'ARYN ENT CLINIC',city:'mexico',degination:'GYNOCOLOGY & SURGON'},
    
    
    ]
  text: any[] = [
    {heading:'POPULAR CLINICS',message:'Lorem Ipsum is simply dummy text of the printing and typesetting in Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',link:'SHOW All'}
  ]
     
    
}
