importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
var firebaseConfig = {
  apiKey: "AIzaSyDRWAv_6CkY0N5ocqceEDbh5gc2UankMXo",
  authDomain: "truonglh-68106.firebaseapp.com",
  projectId: "truonglh-68106",
  storageBucket: "truonglh-68106.appspot.com",
  messagingSenderId: "680493532790",
  appId: "1:680493532790:web:4d7b3923a9e9d4f00ac157",
  measurementId: "G-YRDCYMF4H9"
};
/*Khởi tạo ứng dụng firebaseConfig (push Nofitication)*/
firebase.default.initializeApp(firebaseConfig);

const messaging = firebase.default.messaging();
