import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor() { }
  dynamic = 6;
  max = 10;
  ngOnInit() {
  }

}
