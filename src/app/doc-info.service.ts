import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocInfoService {

  constructor(private http:HttpClient) {}

    Doctorsinfos(){
     return this.http.get("./assets/DoctorsData.json");
    }
}
