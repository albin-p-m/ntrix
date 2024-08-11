import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-picking-list-generator',
  templateUrl: './picking-list-generator.component.html',
  styleUrls: ['./picking-list-generator.component.scss']
})
export class PickingListGeneratorComponent {

  changeFocus(event: KeyboardEvent, nextInput: any | ElementRef) {
    console.log(event.key);
    if (event.key === "Enter") nextInput.focus();
  }

  addData(event: Event, nextInput: any | ElementRef){
    this.changeFocus(new KeyboardEvent("keydown", {key: 'Enter'}), nextInput)
    console.log("add button pressed");
  }

}
