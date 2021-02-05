import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user = "Elise";
  array = [1, 2, 3, 4]

  constructor() { }

  ngOnInit() {
  }

  userClick() {
    console.log("clicked");
  }

}
