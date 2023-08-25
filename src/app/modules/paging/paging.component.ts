import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {

  @Input() text: string = 'más'
  @Output() newEventClick = new EventEmitter()

  eventClick(){
    this.newEventClick.emit()
  }

}
