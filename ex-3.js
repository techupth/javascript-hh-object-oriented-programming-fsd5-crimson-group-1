class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(posts) {
    this.posts = [];
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(post) {
    console.log(`You've shared post ${post.title} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike() {
    this.like += 1;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage extends User {
  constructor(name) {
    super(name);
  }
}

class FacebookGroup extends User {
  constructor(name) {
    super(name);
  }
}

class Notification extends Post {
  constructor(id) {
    super(id);
  }
  send(commentCreatedBy, postTitle) {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`
    );
  }
}
