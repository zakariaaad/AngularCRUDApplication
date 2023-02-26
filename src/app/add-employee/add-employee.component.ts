import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: employeeForm = new employeeForm();

  @ViewChild('employeeForm')
  employeeForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(
    private router: Router,
    private httpProvider: HttpProviderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  AddEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEmployee(this.addEmployeeForm).subscribe(
        async (data) => {
          if (data != null && data.body != null) {
            if (data != null && data.body != null) {
              var resultData = data.body;
              console.log(resultData);
              if (resultData.isSuccess) {
                this.router.navigate(['/Home']);
              }
              // if (resultData != null && resultData.isSuccess) {
              //   this.toastr.success(resultData.message);
              //   setTimeout(() => {
              //     this.router.navigate(['/Home']);
              //   }, 100);
              // }
            }
          }
        }
        // async (error) => {
        //   this.toastr.error(error.message);
        //   setTimeout(() => {
        //     this.router.navigate(['/Home']);
        //   }, 500);
        // }
      );
    }
  }
}

export class employeeForm {
  employe_firstname: string = '';
  employe_lastname: string = '';
  employe_email: string = '';
  employe_address: string = '';
  employe_phone: string = '';
}
