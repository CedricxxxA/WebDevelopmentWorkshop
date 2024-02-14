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
    
  