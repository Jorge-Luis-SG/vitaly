import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lang(){
    document.getElementById('lang')?.classList.toggle("active");
  }
  menu(){
    document.getElementById('header')?.classList.toggle("menu-active");
  }
}
