using System;
using System.Collections.Generic;

namespace WebAPI.Models;

public partial class Employee
{
    public int EmployeeId { get; set; }
    public string? EmployeeNmae { get; set; }
    public string? Department { get; set; }
    public string? DateOfJoining { get; set; }
    public string? PhotoFileName { get; set; }
}
