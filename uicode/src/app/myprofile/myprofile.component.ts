import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  myprofile: MyProfile = new MyProfile();

  constructor(private route: ActivatedRoute, private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    let partnerName = this.dataService.partnerName
    this.setMyProfile(partnerName);
  }




  private setMyProfile(partnerName: string) {

    const getPartnerDetailsURL = "http://localhost:9090/pmaas/service/" + partnerName;
    this.http.get(getPartnerDetailsURL).subscribe(res => {
      this.myprofile.corporationName = res["name"];
      this.myprofile.organizationName = res["businessUnit"];
      this.myprofile.address = res["address"][0]["addressLine1"];
      this.myprofile.addressLine2 = res["address"][0]["addressLine2"];
      this.myprofile.addressLine3 = "";
      this.myprofile.city = res["address"][0]["city"];
      this.myprofile.state = res["address"][0]["state"];
      this.myprofile.postalCode = res["address"][0]["postalCode"];
      this.myprofile.country = res["address"][0]["country"];
      this.myprofile.contactType = res["contact"][0]["contactType"];
      this.myprofile.role = res["contact"][0]["role"];
      this.myprofile.firstName = res["contact"][0]["firstName"];
      this.myprofile.lastName = res["contact"][0]["lastName"];
      this.myprofile.email = res["contact"][0]["email"];
      this.myprofile.telephone = res["contact"][0]["telephone"];
      this.myprofile.fax = "";
      this.myprofile.deliveryMethod = res["inChannel"][0]["host"];
      this.myprofile.endpoint = res["inChannel"][0]["url"];
      this.myprofile.port = res["inChannel"][0]["port"];
      this.myprofile.username = res["inChannel"][0]["username"];
      this.myprofile.password = res["inChannel"][0]["password"];
    });


  }
}

export class MyProfile {
  corporationName: string;
  organizationName: string;
  address: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  firstName: string;
  contactType: string;
  role: string;
  lastName: string;
  email: string;
  telephone: string;
  fax: string;
  deliveryMethod: string;
  endpoint: string;
  port: string;
  username: string;
  password: string;
}
