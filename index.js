// Write your solution in this file!

const employee = {
name:"Betty",
streetAddress: "Drama",
}

function updateEmployeeWithKeyAndValue() {
    return {...employee,["name"]: "Sam", ["streetAddress"]: "11 Broadway"}             
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
 employee.name="Sam",
 employee.streetAddress="12 Broadway"
return employee;
 }

 function deleteFromEmployeeByKey(employee, key)  {
    const newEmployee ={...employee};
    delete newEmployee.name;
    return newEmployee;
 }
 deleteFromEmployeeByKey();
 
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]
    return employee;
}
