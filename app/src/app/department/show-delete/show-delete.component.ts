import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent implements OnInit {
  constructor(private service:SharedService ){}
  DepartmentList: any = [];
  ModalTitle : string | undefined;
  ActivateAddEditDepComp: boolean = false;
  dep: any;
  DepartmentIdFilter = "";
  DepartmentNameFilter = "";
  DepartmentListWithoutFilter: any = [];


  ngOnInit(): void {
    
    this.refreshDepList()
   
  }
  
  addClick()
  {
    this.dep = {
      DepartmentId: 0,
      DepartmentName:"",
      
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }
  editClick(item: any)
  {
    this.dep = {
      DepartmentId: item.departmentId,
      DepartmentName:item.departmentName,
      
    }
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }
  deleteClick(item:any)
  {
    if (confirm("Are You Sure?"))
    {
      this.service.deleteDepartment(item.departmentId).subscribe(data =>
      {
        alert(data.toString());
        this.refreshDepList();
        })
        }
  }
  refreshDepList() {
    
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
      this.DepartmentListWithoutFilter = data;
    }
    );
  }
  sortResult(prop: any, asc: any) {
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  FilterFn() {
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(
      function (el: any) {
        return el.departmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        ) &&
          el.departmentName.toString().toLowerCase().includes(
            DepartmentNameFilter.toString().trim().toLowerCase())
      }
    );
  }
}
