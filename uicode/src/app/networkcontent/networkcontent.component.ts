import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Network, Partner, Networkfeed, PartnernetworkComponent } from '../partnernetwork/partnernetwork.component';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-networkcontent',
  templateUrl: './networkcontent.component.html',
  styleUrls: ['./networkcontent.component.css']
})
export class NetworkcontentComponent implements OnInit {

  private networkName: string;
  private partnerData: Partner;

  networkData: Network;

  constructor(private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService, 
    private networkComponent: PartnernetworkComponent, private dataService:DataService, private route: ActivatedRoute) {
  }

  updateTimeStampInLocal(): void {
    var val = new Date().toString();
    var key = "updatedTimestamp";
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
  }

   getTimeStampFromLocal(): string {
    var key = "updatedTimestamp";
    console.log('recieved= key:' + key);
    return this.storage.get(key);
   }
   
  lastTimestamp: Date;
  ngOnInit() {
    this.networkName = this.dataService.networkId;
    this.partnerData = this.dataService.partnerData;
    this.lastTimestamp = new Date();
    this.getNetworkDetailsURL();
    this.getNetworkFeedsURL();
    setInterval(() => {
      let updatedTimestamp:Date = new Date(this.getTimeStampFromLocal());
      console.log(updatedTimestamp + " and " + this.lastTimestamp);
      console.log(updatedTimestamp > this.lastTimestamp);
      if(updatedTimestamp > this.lastTimestamp){
        console.log("updateing UI");
        this.getNetworkFeedsURL(); 
      }
      }, 2000);
  }

  networkPartners: Partner[];
  getPartnerDetailsURL(partnerName: string){
    const getPartnerDetailsURL = "http://localhost:9090/pmaas/service/" + partnerName;
    this.http.get(getPartnerDetailsURL).subscribe(res => {
      var partner = this.networkComponent.preparePartnerData(res);
      this.networkPartners.push(partner);
    });
  }

  getNetworkDetailsURL(){
    const getNetworkDetailsURL = "http://localhost:9090/pmaas/networks/" + this.networkName + "/details";
    this.http.get(getNetworkDetailsURL).subscribe(res => {
      this.networkData = this.prepareNetworkData(res);
      this.networkPartners = [];
      this.networkData.partners.forEach(this.getPartnerDetailsURL, this);
    });
  }

  prepareNetworkData(networkData: Object): Network {
    let network = new Network(networkData["partnerName"], networkData["name"], networkData["description"]);
    network.partners = networkData["partners"];
    network.infoList = networkData["networkInfo"];
    return network;
  }

  feeds: Networkfeed[];
  getNetworkFeedsURL(){
    this.lastTimestamp = new Date();
    const getNetworkDetailsURL = "http://localhost:9090/pmaas/networks/" + this.networkName + "/feeds?startIndex=0";
    this.http.get<Networkfeed[]>(getNetworkDetailsURL).subscribe(res => {
      this.feeds = res;
    });
  }

  postFeed(feedText: string){
    const getAddFeedURL = "http://localhost:9090/pmaas/networks/" + this.networkName + "/feeds/"+feedText + "/partner/" + this.partnerData.name;
    this.http.get(getAddFeedURL).subscribe(res => {
      console.log("Feed Added!!");
      this.getNetworkFeedsURL();
      this.updateTimeStampInLocal();
    });
  }
  onNavigate(url: string){
    window.open(url, "_blank");
  }
}