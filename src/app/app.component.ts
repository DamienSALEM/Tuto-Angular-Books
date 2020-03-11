import { Component } from "@angular/core";
import * as firebase from "firebase";
import { config } from "process";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "book-application";

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyD5B31ZDfGOMbWLZgrMtkYDYAdY2dXXnGA",
      authDomain: "books-db-870a3.firebaseapp.com",
      databaseURL: "https://books-db-870a3.firebaseio.com",
      projectId: "books-db-870a3",
      storageBucket: "books-db-870a3.appspot.com",
      messagingSenderId: "707226057951",
      appId: "1:707226057951:web:07383a60b3a10d0dda3d6a",
      measurementId: "G-BXJZ2ELH3J"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
