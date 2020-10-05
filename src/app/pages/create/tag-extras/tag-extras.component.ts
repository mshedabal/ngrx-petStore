import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-extras',
  templateUrl: './tag-extras.component.html',
  styleUrls: ['./tag-extras.component.scss']
})
export class TagExtrasComponent {
  tagClip: boolean;
  gems: boolean;
  @Output() toggleClipEvent = new EventEmitter;
  @Output() toggleGemsEvent = new EventEmitter;
  
  constructor() { }

  toggleClip() {
    this.toggleClipEvent.emit();
  }

  toggleGems() {
    this.toggleGemsEvent.emit();
  }

}
