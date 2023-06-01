import { Component,Input,OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-aadd-edit-emp',
  templateUrl: './aadd-edit-emp.component.html',
  styleUrls: ['./aadd-edit-emp.component.css']
})
export class AaddEditEmpComponent implements OnInit{
  constructor(private service: SharedService) {
    
  }
  @Input() emp: any;
  EmployeeId: string | undefined;
  EmployeeNmae: string | undefined;
  Department: string | undefined;
  DateOfJoining: string | undefined;
  PhotoFileName: string | undefined;
  PhotoFilePath: string | undefined;

  DepartmentsList: any = [];

  ngOnInit(): void{
    this.loadEmployeeList();
  }
  loadEmployeeList()
  {
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentsList = data;
      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeNmae = this.emp.EmployeeNmae;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
      

    });
  }
  addEmp()
  {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeNmae: this.EmployeeNmae,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName : this.PhotoFileName
    };
    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }
  updateEmp()
  {
      var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeNmae,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName : this.PhotoFileName
    };
    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event:any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    })
  }
}

