const employees = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          id: 1,
          title: "Update client database",
          description: "Ensure all recent client info is updated in CRM.",
          date: "2025-04-22",
          category: "Data Entry",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          id: 2,
          title: "Review sales report",
          description: "Analyze Q1 sales and report findings.",
          date: "2025-04-20",
          category: "Analytics",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          id: 3,
          title: "Team meeting",
          description: "Join the weekly team meeting on Zoom.",
          date: "2025-04-19",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          id: 4,
          title: "Team call urgent",
          description: "Join the call team meeting on Zoom.",
          date: "2025-04-19",
          category: "Meetings",
          active: false,
          newTask: true,
          completed: false,
          failed: true
        }
      ],
      taskCount: {
        active: 1,
        newTask: 3,
        completed: 5,
        failed: 2
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Fix login bug",
          description: "Resolve issue with login redirect.",
          date: "2025-04-21",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Write blog post",
          description: "Create a blog post about our new feature.",
          date: "2025-04-18",
          category: "Content",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Deploy staging site",
          description: "Push the current version to the staging environment.",
          date: "2025-04-22",
          category: "DevOps",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Test payment flow",
          description: "Ensure Stripe integration works end-to-end.",
          date: "2025-04-20",
          category: "QA",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1
      }
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Design UI for dashboard",
          description: "Create mockups for the new admin dashboard.",
          date: "2025-04-22",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Respond to feedback",
          description: "Review and reply to client design feedback.",
          date: "2025-04-19",
          category: "Communication",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Prepare pitch deck",
          description: "Design slides for the investor meeting.",
          date: "2025-04-21",
          category: "Presentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 4,
      name: "Neha Singh",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Update help center",
          description: "Add FAQs for the latest product update.",
          date: "2025-04-20",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Host webinar",
          description: "Conduct user onboarding webinar.",
          date: "2025-04-22",
          category: "Events",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Follow up with leads",
          description: "Send emails to potential customers.",
          date: "2025-04-19",
          category: "Sales",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Social media calendar",
          description: "Plan posts for next 2 weeks.",
          date: "2025-04-18",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ],
      taskCount: {
        active: 1,
        newTask: 1,
        completed: 2,
        failed: 1
      }
    },
    {
      id: 5,
      name: "Kunal Mehta",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Refactor codebase",
          description: "Clean up redundant code in project repo.",
          date: "2025-04-22",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Client call",
          description: "Discuss project updates with client.",
          date: "2025-04-21",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Optimize database",
          description: "Improve query performance on reports page.",
          date: "2025-04-20",
          category: "Database",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Security audit",
          description: "Run security checks for latest release.",
          date: "2025-04-22",
          category: "Security",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Create test cases",
          description: "Write unit tests for API endpoints.",
          date: "2025-04-19",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 2,
        failed: 1
      }
    }
  ];
  

const admin = [{
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "123"
}];



export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
   
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin};
}