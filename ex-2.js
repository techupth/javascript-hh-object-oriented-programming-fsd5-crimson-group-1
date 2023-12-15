class Notification {
  constructor(notificationId, createdTime, content) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
  }
  sendEmail() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
  sendSms() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
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

emailNotificationDemo.sendEmail();
smsNotificationDemo.sendSms();
