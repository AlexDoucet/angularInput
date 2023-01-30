import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {

public newOnomatopia : string = '';

@Output()
sendOnomatopiaToParent : EventEmitter<string> = new EventEmitter();

constructor(){}

createOnomatopia() : void {

this.sendOnomatopiaToParent.emit(this.newOnomatopia);
this.newOnomatopia = '';

}

ngOnInit() {}

}
