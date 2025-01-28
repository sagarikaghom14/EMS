
const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile the financial data for the monthly report.",
                "taskDate": "2025-01-30",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update Client Database",
                "taskDescription": "Update records with recent client interactions.",
                "taskDate": "2025-01-27",
                "category": "Data Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Discuss project progress and next steps.",
                "taskDate": "2025-01-25",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the new feature code from the development team.",
                "taskDate": "2025-01-28",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Test Cases",
                "taskDescription": "Create test cases for the authentication module.",
                "taskDate": "2025-01-26",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Bugs",
                "taskDescription": "Fix the reported issues in the user profile section.",
                "taskDate": "2025-01-29",
                "category": "Bug Fixing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Ananya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Draft Email Campaign",
                "taskDescription": "Create content for the upcoming email campaign.",
                "taskDate": "2025-01-31",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Analyze Market Trends",
                "taskDescription": "Prepare a report on the latest market trends.",
                "taskDate": "2025-01-27",
                "category": "Research",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Design Social Media Posts",
                "taskDescription": "Design graphics for the company's social media accounts.",
                "taskDate": "2025-01-28",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Ravi",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Organize Workshop",
                "taskDescription": "Arrange a workshop for the team on time management.",
                "taskDate": "2025-02-01",
                "category": "Training",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update Software",
                "taskDescription": "Update the HR software to the latest version.",
                "taskDate": "2025-01-26",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Document Guidelines",
                "taskDescription": "Draft guidelines for remote work policies.",
                "taskDate": "2025-01-27",
                "category": "HR",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Kavya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Set Up Database",
                "taskDescription": "Configure the database for the new project.",
                "taskDate": "2025-01-29",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Review Contracts",
                "taskDescription": "Review contracts for upcoming vendor agreements.",
                "taskDate": "2025-01-28",
                "category": "Legal",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Update Website",
                "taskDescription": "Update the company's website with the latest news.",
                "taskDate": "2025-01-30",
                "category": "Web Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
};
