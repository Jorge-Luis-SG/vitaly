import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-item',
  templateUrl: './nft-item.component.html',
  styleUrls: ['./nft-item.component.scss']
})
export class NftItemComponent implements OnInit {

  constructor() { }

  @Input() nft = "";

  ngOnInit(): void {
  }

}
