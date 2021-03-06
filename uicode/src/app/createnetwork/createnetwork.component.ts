import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import { FormControl, NgForm } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Network, PartnernetworkComponent } from '../partnernetwork/partnernetwork.component';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  providers: [PartnernetworkComponent],
  selector: 'app-createnetwork',
  templateUrl: './createnetwork.component.html',
  styleUrls: ['./createnetwork.component.css']
})
export class CreatenetworkComponent implements OnInit {

  partnerName: string;

  constructor(private http: HttpClient, private dataService: DataService, private partnerNetwork: PartnernetworkComponent, private route: Router ) {
    this.filteredPartners = this.partnerCtrl.valueChanges.pipe(
      startWith(null),
      map((partner: string | null) => partner ? this._filter(partner) : this.allPartners.slice()));
  }

  ngOnInit() {
    this.partnerName = this.dataService.partnerName;
    this.getAllPartnersURL();
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  partnerCtrl = new FormControl();
  filteredPartners: Observable<string[]>;
  selectedPartners: string[] = [];
  allPartners: string[] = [];

  network = new Network("", "", "");

  @ViewChild('partnerInput', { static: false }) partnerInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allPartners.filter(partner => partner.toLowerCase().indexOf(filterValue) === 0);
  }


  getAllPartnersURL() {
    const getAllPartnersURL = "http://10.60.14.147:9090/pmaas/service";
    this.http.get(getAllPartnersURL).subscribe(res => {
      this.updatePartnerList(res);
      console.log(res);
    });
  }

  updatePartnerList(res) {
    for (let partnerData of res) {
      this.allPartners.push(partnerData["name"]);
    }
  }

  removePartnerToken(partner: string): void {
    const index = this.selectedPartners.indexOf(partner);

    if (index >= 0) {
      this.selectedPartners.splice(index, 1);
    }
    this.allPartners.push(partner);
    this.allPartners.sort();
    this.partnerCtrl.setValue(null);
  }

  addSelectedPartner(event: MatAutocompleteSelectedEvent): void {
    this.selectedPartners.push(event.option.viewValue);
    this.partnerInput.nativeElement.value = '';
    const index: number = this.allPartners.indexOf(event.option.viewValue);
    if (index !== -1) {
      this.allPartners.splice(index, 1);
    }
    this.partnerCtrl.setValue(null);
  }

  createNetwork(f: NgForm) {
    const createNetworkURL = "http://10.60.14.147:9090/pmaas/networks";
    this.network.partners = this.selectedPartners;
    this.network.partnerName = this.partnerName;
    let data = this.network;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    let options = { headers: headers };
    this.http.post(createNetworkURL, body, options).subscribe(res => {
      this.partnerNetwork.refreshPage();
      this.route.navigateByUrl('/profile/'+this.dataService.partnerName+'/(sub:about)');
      console.log(res);
    });
  }

  // cancelNetwork(){
  //   this.informParent.emit("CANCEL");
  // }
}