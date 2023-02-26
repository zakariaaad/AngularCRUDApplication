import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

//var apiUrl = "https://localhost:44370/";

var apiUrl = 'http://localhost:8080';

var httpLink = {
  getAllEmployee: apiUrl + '/employee',
  deleteEmployeeById: apiUrl + '/deleteEmployeeById',
  getEmployeeDetailById: apiUrl + '/getEmployeeDetailById',
  saveEmployee: apiUrl + '/addemployee',
};

@Injectable({
  providedIn: 'root',
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) {}

  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }

  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(
      httpLink.deleteEmployeeById + '?employe_id=' + model,
      ''
    );
  }

  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '/' + model);
  }

  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }
}
