import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  completeProcess(){
    this.route.navigate(['profile/COCA COLA' ]);
  }

}
