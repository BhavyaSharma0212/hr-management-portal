using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Net.NetworkInformation;
using Microsoft.Extensions.FileProviders;
//
using FluentAssertions.Common;
using MasterContext = WebAPI.Models.MasterContext;

var builder = WebApplication.CreateBuilder(args);
string connString = builder.Configuration.GetConnectionString("EmployeeAppCon");
// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod()
      .AllowAnyHeader());
});
builder.Services.AddDbContext<MasterContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeAppCon"));

});
//builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
//builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}
app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();

app.MapControllers();
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Photos")),
    RequestPath = "/Photos"
});
app.Run();