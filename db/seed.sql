use employees;

INSERT INTO department
    (name)
VALUES
    ('Talent'),
    ('Production'),
    ('Crew'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Actor', 100000, 1),
    ('Stuntman', 80000, 1),
    ('Producer', 150000, 2),
    ('Executive Producer', 120000, 2),
    ('Camera Man', 160000, 3),
    ('Lighting Team', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Wayne', 1, NULL),
    ('Jess', 'Brown', 2, 1),
    ('Drea', 'Rodriguez', 3, NULL),
    ('Samuel', 'Badders', 4, 3),
    ('Auguste', 'Brown', 5, NULL),
    ('Clint', 'Eastwood', 6, 5),
    ('Sarah', 'Marshall', 7, NULL),
    ('Mike', 'Smith', 8, 7);
