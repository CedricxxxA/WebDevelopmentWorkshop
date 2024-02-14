import { productList } from "./products.js";
class Report {
    constructor(id, category, customerId, description, labels, owner, assignedTo, createdAt, editedAt, closedAt, state, priority, comments, closeReason, references) {
      this.id = id;
      this.category = category;
      this.customerId = customerId;
      this.description = description;
      this.labels = labels;
      this.owner = owner;
      this.assignedTo = assignedTo;
      this.createdAt = createdAt;
      this.editedAt = editedAt;
      this.closedAt = closedAt;
      this.state = state;
      this.priority = priority;
      this.comments = comments;
      this.closeReason = closeReason;
      this.references = references;
    }
  }

  class Comment {
    constructor(author, message, createdAt, type) {
      this.author = author;
      this.message = message;
      this.createdAt = createdAt;
      this.type = type;
    }
  }
  class Reference {
    constructor(type, url, issueNumber) {
      this.type = type;
      this.url = url;
      this.issueNumber = issueNumber;
    }
  }
    
  
  const reportList = [];

  reportList.push(new Report(
    "2412",
    "Feedback",
    "1234",
    "This is a description",
    ["label1", "label2"],
    "Product Manager",
    "Jens Reiner",
    "2020-01-01:12:00:00",
    "2020-01-01:12:00:00",
    "2020-01-01:12:00:00",
    "Open",
    1,
    [{
      author: "Jens Reiner",
      message: "This is a comment",
      createdAt: "2020-01-01:12:00:00",
      type: 'developer',
    }],
    "This is a close reason",
    [{
      type: "github",
      url: "",
      issueNumber: 1
    }]
  ));
  
  reportList.push(new Report(
    "1234",
    "Bug",
    "5678",
    "Error message is not displayed",
    ["bug", "ui"],
    "QA Engineer",
    "Anna Müller",
    "2020-02-15:09:30:00",
    "2020-02-15:10:45:00",
    "",
    "Open",
    2,
    [{
      author: "Anna Müller",
      message: "Confirmed the bug, needs fixing",
      createdAt: "2020-02-15:10:45:00",
      type: 'tester',
    }],
    "",
    [{
      type: "github",
      url: "https://github.com/example/repository",
      issueNumber: 2
    }]
  ));
  
  reportList.push(new Report(
    "7890",
    "Feature Request",
    "9012",
    "Add dark mode feature",
    ["enhancement", "ui"],
    "UX Designer",
    "Max Mustermann",
    "2020-03-20:14:00:00",
    "",
    "",
    "Open",
    1,
    [],
    "",
    [{
      type: "github",
      url: "https://github.com/example/repository",
      issueNumber: 3
    }]
  ));
  

  export async function reportRoutes (fastify, options) {
    fastify.get('/reports/customers/:CustId', async (request, reply) => {
      return reportList.find(x => x.customerId === request.params.CustId)
    });
    fastify.get('/products/:ManagerId', async (request, reply) => {
      return productList.find(x => x.productManager === request.params.ManagerId);
    });
    fastify.get('/products/:ProductId/reports', async (request, reply) => {
      let reps;
      let prod = productList.find(x => x.productId === request.params.ProductId);

      prod.reports.forEach(element => {
        reps.push(reportList.find(x => x.id === element));
      });

      return reps;
    });
}