import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagelist: any[] = [
    {img :"./assets/logos/categorie-1.png",name:'Doctors'},
    {img :"./assets/logos/categorie-2.png",name:'Clinics'},
    {img :"./assets/logos/categorie-3.png",name:'Labs'},
    {img :"./assets/logos/categorie-4.png",name:'Pharmacies'}
    
    ]
    
 
}
