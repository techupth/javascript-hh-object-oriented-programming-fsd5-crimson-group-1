class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(email) {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

let emailNotificationDemo = new EmailNotification(
  "ID:1",
  "5:00 PM",
  "Hi, contact from E-mail",
  "test1@gmail.com"
);

let smsNotificationDemo = new SMSNotification(
  "ID:2",
  "8:00 AM",
  "Hi, contact from SMS",
  "123-123-123"
);

emailNotificationDemo.send();
smsNotificationDemo.send();
