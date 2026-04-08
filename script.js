
let employees = [];


function addEmployee() {
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    let department = document.getElementById("department").value;

    if (name === "" || salary === "") {
        alert("Please fill all fields");
        return;
    }

    let emp = {
        name: name,
        salary: Number(salary),
        department: department
    };

    employees.push(emp);
    displayEmployees(employees);

  
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";
}


function displayEmployees(data) {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    data.forEach(emp => {
        let row = `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
                <td>${emp.department}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}


function filterEmployees() {
    let dept = document.getElementById("filterDept").value;

    if (dept === "All") {
        displayEmployees(employees);
    } else {
        let filtered = employees.filter(emp => emp.department === dept);
        displayEmployees(filtered);
    }
}


function calculateAverage() {
    if (employees.length === 0) {
        document.getElementById("avgResult").innerText = "No employees added.";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("avgResult").innerText =
        "Average Salary: " + avg.toFixed(2);
}