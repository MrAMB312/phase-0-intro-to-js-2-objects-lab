const employee = {
    name: "Alex",
    streetAddress: "123 Fake Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };

    updatedEmployee[key] = value;

    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const removeEmployee = { ...employee };

    delete removeEmployee[key];

    return removeEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}