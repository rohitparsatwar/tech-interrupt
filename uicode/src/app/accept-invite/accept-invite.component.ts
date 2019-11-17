import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.css']
})
export class AcceptInviteComponent implements OnInit {

  partnerName: string;
  enable: boolean = true;
  networkId: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.enable = true;
    this.partnerName = this.route.snapshot.paramMap.get('partnerName');
    this.networkId = this.route.snapshot.paramMap.get('networkId');
  }


  acceptInvitation() {
    let partnerName = this.route.snapshot.paramMap.get('partnerName');
    let networkId = this.route.snapshot.paramMap.get('networkId');
    let partnerToAdd = this.route.snapshot.paramMap.get('partnerToAdd');
    const createNetworkURL = "http://localhost:9090/pmaas/networks/" + networkId + "/addPartnerToNetwork/" + partnerToAdd;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    let options = { headers: headers };
    this.http.get(createNetworkURL).subscribe(res => {
      this.enable = false;
      console.log(res);
    });
  }

  // acceptInvitation() {
  //   let partnerName = this.route.snapshot.paramMap.get('partnerName');
  //   let networkId = this.route.snapshot.paramMap.get('networkId');
  //   let partnerToAdd = this.route.snapshot.paramMap.get('partnerToAdd');
  //   const getPartnerNetworkURL = "http://localhost:9090/pmaas/networks/getPartnerNetworks/" + partnerName;
  //   this.http.get(getPartnerNetworkURL).subscribe(res => {
  //     let networkData = this.getPassedNetwork(res, networkId);
  //     networkData['partners'].push(partnerToAdd);
  //     this.addPartnerToNetwork(networkData, );
  //     console.log(res);
  //   });
  // }

  getPassedNetwork(res, networkId) {
    for (let networkData of res) {
      if (networkData['name'] === networkId) {
        return networkData;
      }
    }
  }

}
