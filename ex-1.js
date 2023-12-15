class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  sendEmail() {
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
  sendSms() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const emailTsunamiAlert = new EmailNotification(`Alert`, 11.0, `Tsunami`, [
  `Biden`,
  `Putin`,
  `Prayuth`,
]);

const smsTsunamiAlert = new SMSNotification(
  `Alert`,
  `11:00`,
  `Tsunami`,
  `099 999 9999`
);

emailTsunamiAlert.sendEmail();

smsTsunamiAlert.sendSms();
