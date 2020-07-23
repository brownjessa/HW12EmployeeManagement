const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    };

    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }



    findAllPossibleManagers(employeeId) {
        return this.connection.query("SELECT id, first_name, last_name FROM employee WHERE id"),
            employeeId
    };


    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

    removeEmployee(employeeId) {
        return this.connection.query(
            "DELETE FROM employee WHERE id = ?",
            employeeId
        );
    }

    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query(
            "UPDATE employee SET role_id = ? WHERE id =?",
            [roleId, employeeId]
        );
    }

    updateEmployeeManager(employeeId, managerId) {
        return this.connection.query(
            "UPDATE employee SET manager_id = ? WHERE id = ?",
            [managerId, employeeId]
        );
    }

    findAllRoles() {
        return this.connection.query(
            ' SELECT role.id, role.title, department.name, role.salary FROM role LEFT JOIN department on role.department_id = department.id'
        );
    }

    createRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    }

    removeRole(roleId) {
        return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
    }

    findAllDepartments() {
        return this.connection.query(
            'SELECT department.id, department.name, SUM (role.salary) FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name'
        );
    }

    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }

    removeDepartment(departmentId) {
        return this.connection.query(
            "DELETE FROM department WHERE id = ?",
            departmentId
        );
    }

}

module.exports = new DB(connection);