import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  myprofile: MyProfile = new MyProfile();

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    let partnerName = this.dataService.partnerName
    this.setMyProfile(partnerName);
  }




  private setMyProfile(partnerName: string) {
    this.myprofile.corporationName = partnerName;
    this.myprofile.organizationName = partnerName;
    this.myprofile.address = "North Avenue";
    this.myprofile.addressLine2 = "Luckie Street";
    this.myprofile.addressLine3 = "";
    this.myprofile.city = "Atlanta";
    this.myprofile.state = "Georgia";
    this.myprofile.postalCode = "100002";
    this.myprofile.country = "USA";
    this.myprofile.firstName = "Admin";
    this.myprofile.lastName = "Coca Cola";
    this.myprofile.email = "contact@"+partnerName+".com";
    this.myprofile.telephone = "9709098098098";
    this.myprofile.fax = "";
    this.myprofile.deliveryMethod = "http";
    this.myprofile.endpoint = "http://inchannel.cocacola.com";
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
  lastName: string;
  email: string;
  telephone: string;
  fax: string;
  deliveryMethod: string;
  endpoint: string;
}
