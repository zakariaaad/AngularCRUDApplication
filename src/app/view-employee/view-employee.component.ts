import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { WebApiService } from '../service/web-api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  employeeId: any;
  employeeDetail: any = [{}];

  constructor(
    public webApiService: WebApiService,
    private route: ActivatedRoute,
    private httpProvider: HttpProviderService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    console.log(this.employeeId);
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {
    this.httpProvider.getEmployeeDetailById(this.employeeId).subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          console.log(resultData);
          if (resultData) {
            this.employeeDetail = resultData[0];
          }
          // if (typeof resultData !== 'undefined') {
          //   console.log(resultData[0]); // Will not run because arr is undefined
          // }
          console.log(resultData[0]);

          // console.log(this.employeeDetail);
        }
      }
      // (error: any) => {}
    );
  }
}
// console.log(resultData);
