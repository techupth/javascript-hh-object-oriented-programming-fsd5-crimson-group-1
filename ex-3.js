//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Postlist {
  constructor(posts) {
    this.posts = [];
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost() {
    console.log(`You've shared post ${this.posts} to your friend.`);
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
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike(like) {
    this.like += like;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup() {
    this.groupList += 1;
  }
  addPage() {
    this.pageList += 1;
  }
}

class Facebookpage {
  constructor(name) {
    this.name = name;
  }
}

class Facebookgroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(post) {
    this.post = post;
  }
  send() {
    if (this.post.comment.length > 0) {
      console.log(
        `Notification: ${this.post.comment[0].createdBy} has just commented on this post—${this.post.title}`
      );
    } else {
      console.log(`Notification: No comments yet on post—${this.post.title}`);
    }
  }
}

const myComment = new Comment(1, "Great post!", "JohnDoe", 5);
const myPost = new Post(1, "My First Post", "This is my first post.", [
  myComment,
]);
// สร้างโพสต์และใส่ความคิดเห็นลงไป

myPost.addComment(myComment);
// เพิ่มคอมเม้นต์เข้าไปในโพสต์

const myNotification = new Notification(myPost);
// สร้าง Notification โดยใช้โพสต์ที่มีความคิดเห็นอยู่

myNotification.send(); // ส่ง Notification

console.log(myPost.title);
console.log(myPost.content);
console.log(myPost.comment);
