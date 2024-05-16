import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-hw',
  templateUrl: './directives-hw.component.html',
  styleUrl: './directives-hw.component.css'
})
export class DirectivesHwComponent {

  isVisible = false
  loggedClick = []

   
  onButtonToggle(){
    this.isVisible = !this.isVisible
    this.loggedClick.push(new Date())
  }


}
