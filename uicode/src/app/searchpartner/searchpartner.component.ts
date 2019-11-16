import { Component, OnInit } from '@angular/core';
import {Partner} from './../model/partner'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchpartner',
  templateUrl: './searchpartner.component.html',
  styleUrls: ['./searchpartner.component.css']
})
export class SearchpartnerComponent implements OnInit {

  partners:Partner[] = new Array();
  url:string = "http://localhost:9090/pmaas/service";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let p1 =  new Partner();
    p1.name = "test";
    p1.businessUnit = "testbu";
    this.partners.push(p1);

    return this.http.get(this.url).subscribe(res => {
      this.updateEmpList(res)
    });
  }

  updateEmpList(res){
    this.partners = [];
    for(let user of res){
      //ids.push(result.Id);
      let partnr:Partner=  new Partner();
      partnr.name = user["name"];
      partnr.businessUnit = user["businessUnit"];      
      this.partners.push(partnr);
   }
  }


}
