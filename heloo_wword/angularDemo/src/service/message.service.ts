import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {AngularFireMessaging} from "@angular/fire/messaging";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {

  }

  // tslint:disable-next-line:typedef
  requestPermission() {
    this.angularFireMessaging.requestPermission.subscribe((token) => {
        console.log('requestPermission ', token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log('token', token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log('new message received. ', payload);
        this.currentMessage.next(payload);
        this.showCustomerNotification(payload);
      });
  }

  showCustomerNotification(payload: any) {
    let notify_data = payload['notification'];
    let title = notify_data['title'];
    let options = {
      body: notify_data['body'],
      icon: "./assets/funny.jpg",
      badge: "./assets/funny.jpg",
      image: "./assets/ra_dao.jpg",
    };
    console.log("new message received", notify_data);
    let notify: Notification = new Notification(title, options);
    notify.onclick = event => {
      event.preventDefault();
      window.location.href = "https://www.google.com";
    }
  }
}
