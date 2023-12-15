class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}
class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

const thailandAlertEmail = new EmailNotification(
  `Alet1`,
  `11.00`,
  `Earthquake`,
  `People of Thailand`
);

const thailandAlertSms = new SMSNotification(
  `Alet1`,
  `11.00`,
  `Earthquake`,
  `Phonenumbers of Thailand`
);

thailandAlertEmail.send();
thailandAlertSms.send();
