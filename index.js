// Write your solution in this file!
const employee = {
    name: "Brian",
    streetAddress: "NBI CBD",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployeeObj = { ...employee, [key]: value };
    // copyOfEmployeeObj[key] = value;
    return copyOfEmployeeObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployeeObj = { ...employee };
    delete copyOfEmployeeObj[key];
    return copyOfEmployeeObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'));
console.log(employee)