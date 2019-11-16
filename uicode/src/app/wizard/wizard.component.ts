import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  constructor(private route: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  completeProcess() {
    this.dataService.partnerName = "COCA COLA";
    this.route.navigateByUrl('profile/COCA COLA/(sub:about)');
  }

}
