import { Component, OnInit } from '@angular/core';
import { DocInfoService } from '../doc-info.service';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.css']
})
export class DoctorsDetailsComponent implements OnInit {

  DoctorsDetails: any;

  constructor(public docinfo: DocInfoService) { }
  
  ngOnInit() {
    this.getDoctorsInfo();
  }

  getDoctorsInfo() {
    this.docinfo.Doctorsinfos().subscribe(data => {
      this.DoctorsDetails = data;
      console.log(this.DoctorsDetails);
    })

  }

}
