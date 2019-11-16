import { Component, OnInit, Input } from '@angular/core';
import { Networkfeed, PartnernetworkComponent, Partner, FeedComment, Network } from '../partnernetwork/partnernetwork.component';
import { HttpClient } from '@angular/common/http';
import { NetworkcontentComponent } from '../networkcontent/networkcontent.component';

@Component({
  selector: 'app-networkfeed',
  templateUrl: './networkfeed.component.html',
  styleUrls: ['./networkfeed.component.css']
})
export class NetworkfeedComponent implements OnInit {

  @Input('feed') feed: Networkfeed;
  @Input('currentPartner') currentPartner: Partner;
  @Input('currentNetwork') currentNetwork: Network;

  feedPartnerData: Partner = new Partner("");

  constructor(public http: HttpClient, 
    private networkComponent: PartnernetworkComponent, 
    private networkContentComponent: NetworkcontentComponent) {
   }

  ngOnInit() {
    this.getFeedPartnerDetailsURL();
  }

  getFeedPartnerDetailsURL(){
    const getFeedPartnerDetailsURL = "http://localhost:8080/pmaas/service/" + this.feed.partnerName;
    this.http.get(getFeedPartnerDetailsURL).subscribe(res => {
      this.feedPartnerData = this.networkComponent.preparePartnerData(res);
    });

    this.feed.comments.forEach(this.getCommentPartnerDetails, this);
  }

  getCommentPartnerDetails(comment: FeedComment){
    comment.profile = new Partner(comment.partnerName);
    this.networkComponent.populateProfileImg(comment.profile);
  }

  addComment(comment: string){
    console.log(comment);
    const getAddCommentURL = "http://localhost:8080/pmaas/networks/" + this.currentNetwork.name + "/feeds/"+this.feed.feedId + "/comments/"+comment+"/partner/" + this.currentPartner.name;
    this.http.get(getAddCommentURL).subscribe(res => {
      console.log("Comment Added!!");
      this.networkContentComponent.getNetworkFeedsURL();
      this.networkContentComponent.updateTimeStampInLocal();
    });
  }

}
