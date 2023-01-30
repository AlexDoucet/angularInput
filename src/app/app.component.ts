import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularQuest';

  onomatopiaList : string[] = [];
  // public onomatopiaList:Array<string>=[];

  onReceiveNewOnomatopia($event: string) : void {
this.onomatopiaList.push($event);
  }

}
