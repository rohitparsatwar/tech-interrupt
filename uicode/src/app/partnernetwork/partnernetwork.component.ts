import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-partnernetwork',
  templateUrl: './partnernetwork.component.html',
  styleUrls: ['./partnernetwork.component.css']
})
export class PartnernetworkComponent implements OnInit {
  
  mySubscription: any;

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router, private dataService: DataService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  
  
  sideMenuItems = [];
  content = 'About';
  currentPartner: string = 'COCA COLA';
  partnerData: Partner;

  showContent(item:MenuItem){
      this.content = item.name;
      this.dataService.networkId = item.name;
      console.log(this.content);
  }

  networkMenuItem: MenuItem;
  myProfileMenuItem: MenuItem;
  initializeMenu(){
    this.sideMenuItems = [];
    this.sideMenuItems.push(new MenuItem('about', 'About', null, true));
    this.networkMenuItem = new MenuItem('networks', 'Networks', null, false);
    this.myProfileMenuItem = new MenuItem('myprofile', 'My Profile', null, true);
    this.sideMenuItems.push(this.myProfileMenuItem);
    this.sideMenuItems.push(this.networkMenuItem);
    let childItem = new MenuItem('createnetwork', 'Create New Network...', 'add_box', true)
    this.networkMenuItem.addChildMenuItem(childItem);
    console.log(this.networkMenuItem);
  }

  

  ngOnInit() {
    let partnerId = this.route.snapshot.paramMap.get('id');
    if(null == partnerId) partnerId = 'COCA COLA';
    this.currentPartner = partnerId;
    this.partnerData = new Partner(this.currentPartner);

    this.dataService.partnerName = partnerId;
    this.initializeMenu();
    this.getPartnerDetailsURL();
    this.getPartnerNetworkURL();
    
  }

  getPartnerDetailsURL(){
    const getPartnerDetailsURL = "http://10.60.14.147:9090/pmaas/service/" + this.currentPartner;
    this.http.get(getPartnerDetailsURL).subscribe(res => {
      this.partnerData = this.preparePartnerData(res);
      this.dataService.partnerData = this.partnerData;
    });
  }

  preparePartnerData(partnerData){
    let partner = new Partner(partnerData["name"]);
    partner.title = partnerData["title"];
    partner.subTitle = partnerData["subTitle"];
    partner.aboutText = partnerData["about"];
    partner.businessUnit = partnerData["businessUnit"];
    this.populateProfileImg(partner);
    return partner;
  }
  populateProfileImg(partner: Partner){
    let cocacolaProfileImg = "https://media.licdn.com/dms/image/C4D1BAQEeMujmq7chbA/company-background_10000/0?e=2159024400&v=beta&t=w535pOorqAjMv8RWt0N0h1F4pMgS5gbgoQExKs-XYRY";
    let cocacolaProfileBgImg = "https://media.licdn.com/dms/image/C4D0BAQEhDK7h-cDCAg/company-logo_400_400/0?e=1579132800&v=beta&t=9htXPvlyRU_L5uVe1KTW0WjVct4fkFRFm3jVsplUgdU";
    let sonyProfileImg = "https://77snszqv.media.zestyio.com/FX9-11.f1cb27a519bdb5b6ed34049a5b86e317.jpg";
    let sonyProfileBgImg = "https://media.licdn.com/dms/image/C4D0BAQHfsUDXyfj9lQ/company-logo_400_400/0?e=1579132800&v=beta&t=TtXsSt8MrgZtJje-fGIOGrAsKSrHOnFW_E0qU0-osKs";
    if(partner.name == 'COCA COLA'){
      partner.profileImgURL = cocacolaProfileImg;
      partner.profileBgImgURL = cocacolaProfileBgImg;
    }else if(partner.name == 'SONY'){
      partner.profileImgURL = sonyProfileImg;
      partner.profileBgImgURL = sonyProfileBgImg;
    }
  }

  getPartnerNetworkURL(){
    const getPartnerNetworkURL = "http://10.60.14.147:9090/pmaas/networks/getPartnerNetworks/" + this.currentPartner;
    this.http.get(getPartnerNetworkURL).subscribe(res => {
      this.initializeMenu();
      this.updateNetworkList(res);
    });
  }

  updateNetworkList(res){
    for(let networkData of res){
      this.networkMenuItem.addChildMenuItem(new MenuItem('networkcontent',networkData["name"], null, true));
   }
  }
  
  refreshPage(){
    console.log("refreshing Parent");
    this.getPartnerNetworkURL();
  }

}

export class Partner {
  title: string;
  aboutText: string;
  subTitle: string;
  businessUnit: string;
  profileImgURL: string;
  profileBgImgURL: string;
  constructor(
    public name: string){}
}

export class Network {
  public partners: string[];
  public infoList: NetworkInfo[];
  constructor(
    public partnerName: string,
    public name: string,
    public description: string){}
}

export class NetworkInfo {
  constructor(public name: string,
    public value: string,
    public type: string){}
}

export class Networkfeed {
    public partnerName: string;
    public feed: string;
    public comments: FeedComment[];
  constructor(public feedId: string){}
}

export class FeedComment {
  public partnerName: string;
  public profile: Partner = new Partner("");;
  public comment: string;
  constructor(){
  };
}

export class MenuItem {
  childMenuItems: MenuItem [] = [];
  addChildMenuItem(item: MenuItem){
    this.childMenuItems.push(item);
  }
  
  constructor(
    public id: string,
    public name: string,
    public icon: string,
    public enable: boolean) { }
}
