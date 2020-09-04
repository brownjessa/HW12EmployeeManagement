# EMPLOYEE MANAGEMENT TOOL

This is a command line tool allowing management of business hierarchy using a SQL database. Users are able to view, add, and update departments, roles, and employees. Output is displayed and formatted in an easy-to-read table.

Note: This was a homework assignment. Homework instructions are found below after the Installation and Operation instructions.

# Installation & Operation

1. Run npm i in your working directory after cloning this repository to install the necessary dependencies.

2. Begin a MySQL server instance and change the settings in \employee-controls.js to reflect your database settings and password.

3. If you do not already have an established database, please run \db\schema.sql and \db\seed.sql in your preferred MySQL interface to initialize and seed the database for demonstration functionality.

4. Run node employee-controls.js in your working directory to initialize the tool.

# Employee Tracker

Creating An employee Database designed to view departments roles employee manager and salary
Will be able to view departments, add departments, add employees, update employee roles, and managers as well as view employees by manager.
Will also be able to delete department roles and employees

## Instructions

Design the following database schema containing three tables:

- **department**:

  - **id** - INT PRIMARY KEY
  - **name** - VARCHAR(30) to hold department name

- **role**:

  - **id** - INT PRIMARY KEY
  - **title** - VARCHAR(30) to hold role title
  - **salary** - DECIMAL to hold role salary
  - **department_id** - INT to hold reference to department role belongs to

- **employee**:

  - **id** - INT PRIMARY KEY
  - **first_name** - VARCHAR(30) to hold employee first name
  - **last_name** - VARCHAR(30) to hold employee last name
  - **role_id** - INT to hold reference to role employee has
  - **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

Build a command-line application that at allows the user to:

- Add departments, roles, employees

- View departments, roles, employees

- Update employee roles

- Update employee managers

- View employees by manager

- Delete departments, roles, and employees

Links:
https://github.com/brownjessa/HW12EmployeeManagement
