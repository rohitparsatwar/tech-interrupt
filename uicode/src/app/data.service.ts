
import { Injectable } from '@angular/core';
import { Partner } from './partnernetwork/partnernetwork.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   partnerName: string;
   networkId: string;
   partnerData: Partner;

  constructor() { }
}
