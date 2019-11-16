import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutText: String;

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.getPartnerDetailsURL();
  }

  getPartnerDetailsURL() {
    const getPartnerDetailsURL = "http://localhost:9090/pmaas/service/" + this.dataService.partnerName;
    this.http.get(getPartnerDetailsURL).subscribe(res => {
      this.aboutText = res["about"];
    });
  }

}
