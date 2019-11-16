import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dbslate',
  templateUrl: './dbslate.component.html',
  styleUrls: ['./dbslate.component.css']
})
export class DbslateComponent implements OnInit {
  sourceText: string = "select * from partner where rownum < 10";
  mysqlText:string = "";
  mysqlRunResult:string = "";
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  processRequest() {


    this.httpClient.post("http://localhost:9090/pmaas/dbslate",
      {
        "sourceDb": "oracle",
        "targetDb": "mysql",
        "inputScript": this.sourceText
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.mysqlText = data["outputScript"];
          this.mysqlRunResult = data["runResult"];
        },
        error => {
          console.log("Error", error);
        }

      );

  }
}


