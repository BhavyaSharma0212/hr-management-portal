import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDeleteComponent } from './department/show-delete/show-delete.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AaddEditEmpComponent } from './employee/aadd-edit-emp/aadd-edit-emp.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDeleteComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AaddEditEmpComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
