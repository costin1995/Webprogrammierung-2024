import { Component } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { Student } from './Model/student';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3BdQFvj_GaEVNJWi6UVSh5FaJoCxKn-c",
  projectId: "projekt-web-2024",
  projectNumber: "262763720023"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'projekt-web';
  
  showList: boolean = false;

  my_text: string = "I'm not crazy, my mother had me tested!";
  characters: string[] = ["Sheldon", "Leonard", "Penny", "Howard", "Raj"];

  studentName='Gerry';
  studentAge=28;

  studentList: Student[] = [];

  constructor() { 
    this.getStudents();
   }

   changeText():void {
    this.my_text = "Bazinga!";
  }

  showHideList():void {
    this.showList = !this.showList;
  }

  addStudent(){
    try {
      var newStudent = new Student(this.studentName, this.studentAge);
      const docRef = addDoc(collection(db, "Students"), {
        Name: newStudent.name,
        Age: newStudent.age
      });
      docRef.then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  getStudents(){
    const querySnapshot = getDocs(collection(db, "Students"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()['Name']}`);
        var student = new Student(doc.data()['Name'], doc.data()['Age']);
        this.studentList.push(student);
      });
    });
  }
}
