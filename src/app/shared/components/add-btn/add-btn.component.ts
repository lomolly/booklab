import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {

  @Input() name : string | undefined;
  @Input() type : string | undefined;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('I got to add button');
  }

}
