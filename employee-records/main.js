var employees = [] 

function Employee( name, jobTitle, salary,){//formal arguments/parameters
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}
Employee.prototype.printEmployeeForm= function(){
    console.log(`name: ${this.name} + jobTitle: ${this.jobTitle} +  salary: ${this.salary} +  status: ${this.status}`)
}

var emp1 = new Employee("Blair", "ceo", "$180,000")
var emp2 = new Employee("Johnson", "sales associate", "$30,000")
var emp3 = new Employee("Duncan", "manager", "$60,000")



emp3.status = "contract";
   

emp1.printEmployeeForm()
emp2.printEmployeeForm()
emp3.printEmployeeForm()
employees.push(emp1,emp2, emp3);
console.log(employees)