import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt-web';
  
  showList: boolean = false;

  my_text: string = "I'm not crazy, my mother had me tested!";

  changeText():void {
    this.my_text = "Bazinga!";
  }

  showHideList():void {
    this.showList = !this.showList;
  }


}
