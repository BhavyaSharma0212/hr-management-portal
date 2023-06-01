# HR Management Portal

A project built using Angular for frontend, ASP.NET Core for creating the WebAPI(backend) and MS SQL Server for database management for easy employee and department details management with add, edit, delete, sort and filter features. 
## Snapshots
Welcome page:
![image](https://github.com/BhavyaSharma0212/hr-management-portal/assets/82492348/fb75d15d-c814-4376-ac31-b5a04ba73483)
Departments page:
![image](https://github.com/BhavyaSharma0212/hr-management-portal/assets/82492348/1ecd5585-37e9-47b8-b5db-4b0060225f84)
Add/Edit Department pop-up:
![image](https://github.com/BhavyaSharma0212/hr-management-portal/assets/82492348/b7db90e4-a11c-441e-b0a1-1da2a7fba851)
Employees page:
![image](https://github.com/BhavyaSharma0212/hr-management-portal/assets/82492348/8488308a-b1a0-41db-a0fe-41ddd22d97c7)
Add/Edit Employee pop-up:
![image](https://github.com/BhavyaSharma0212/hr-management-portal/assets/82492348/986454af-ae5b-4aa0-946c-9bcabb023654)

## Usage
Open MS sql server management studio and create the tables using the folder "tables". Execute and save the tables.

Open Visual Studio Community version and Create a new ASP.NET Web API project. Add the files from folder "api" to this project.

Dowload the following packages from NuGet package manager.
```bash
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools
Microsoft.EntityFrameworkCore.SqlServer.Design
Microsoft.EntityFrameworkCore
```
Run the following command in Program Console Manager:

```bash
Scaffold-DbContext "connection_string" Microsoft.EntityFrameworkCore.SqlServer -f
```
The connection string will vary with the database you are using , you can also use Visual Studio local database.

Add the same connection_string in appsettings.json file with the name "EmployeeAppCon".

Make a "Photos" folder , the uploaded employee images will be saved here.
Build the project and Run the api. You can check the working of api on postman or by enabling swagger in your program.cs.

Next step is to create the angular project. Make sure you have npm , node.js and angular cli installed. You can check their versions as follows

```bash
npm -- version

node --version

ng -version

#install angular-cli
npm install -g @angular.cli
```
You can create the components of deparment , employee and welcome by running command:

```bash
ng g c component_folder/component_name
```
The service can be created by command:
```bash
ng g s SharedService
```
All the codes for the angular components(.html and .ts files) alongiwth the shared service files can be found in the folder "app".

To run the app make sure your web api is successfully built and running. Run the command:
```bash
ng serve -o
```
Welcome page comes up.
