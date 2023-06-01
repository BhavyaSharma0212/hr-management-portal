import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:7108/api/";
  readonly PhotoUrl = "https://localhost:7108/Photos/";
  constructor(private http: HttpClient) { }
  getDepList(): Observable<any> {
    return this.http.get(this.APIUrl + 'Department/GetDepartments')
  
  }
  addDepartment(val: any): Observable<any>  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.APIUrl + "Department/AddDepartment",val,httpOptions);
  }
  updateDepartment(val: any): Observable<any>  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    
    return this.http.put<any>(this.APIUrl + "Department/UpdateDepartment", val,httpOptions);
  }
  deleteDepartment(val: number): Observable<number> {
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.APIUrl + "Department/"+val);
  }
   getEmpList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'Employee/GetEmployees');
  }
  addEmployee(val: any): Observable<any>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.APIUrl + "Employee/AddEmployee", val,httpOptions);
  }
  updateEmployee(val: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.APIUrl + "Employee/UpdateEmployee", val,httpOptions);
  }
  deleteEmployee(val: any): Observable<number>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.APIUrl + "Employee/"+val,httpOptions);
  }
  UploadPhoto(val: any)
  {
    return this.http.post(this.APIUrl + 'Employee/SaveFile/', val);
  }
  getAllDepartmentNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'Employee/GetAllDepartmentNames');
  }
}
