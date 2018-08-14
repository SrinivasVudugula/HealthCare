import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent{
seclist: any[] = [
  {imag :'./assets/images/service-1.png',name:'Reliable Places',massage:'Lorem is a simple dummy text of printing and type setting industry.ipsum has been industries standard dummy'},
  {imag :'./assets/images/service-2.png',name:'High Credibility',massage:'Lorem is a simple dummy text of printing and type setting industry.ipsum has been industries standard dummy'},
  {imag :'./assets/images/service-3.png',name:'Quick Search',massage:'Lorem is a simple dummy text of printing and type setting industry.ipsum has been industries standard dummy'},
  {imag :'./assets/images/service-4.png',name:'Know Better',massage:'Lorem is a simple dummy text of printing and type setting industry.ipsum has been industries standard dummy'}
]
 
}
