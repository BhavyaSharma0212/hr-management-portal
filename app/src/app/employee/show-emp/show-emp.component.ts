import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{
constructor(private service:SharedService ){}
  EmployeeList: any = [];
  ModalTitle : string | undefined;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;
  ngOnInit(): void {
    
   this.refreshEmpList();
  }
  
  addClick()
  {
    this.emp = {
      EmployeeId: 0,
      EmployeeNmae: "",
      Department: "",
      DateOfJoining:"",
      PhototFileName:"anonymous.png",
      
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }
  editClick(item: any)
  {
    this.emp = {
      EmployeeId: item.employeeId,
      EmployeeNmae: item.employeeNmae,
      Department: item.department,
      DateOfJoining:item.dateOfJoining,
      PhototFileName:item.photoFileName,
    }
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }
  deleteClick(item:any)
  {
    if (confirm("Are You Sure?"))
    {
      this.service.deleteEmployee(item.employeeId).subscribe(data =>
      {
        alert(data.toString());
        this.refreshEmpList();
        })
        }
  }
  refreshEmpList() {
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data;
    });
  }
  
}

