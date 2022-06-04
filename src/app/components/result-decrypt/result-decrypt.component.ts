import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-decrypt',
  templateUrl: './result-decrypt.component.html',
  styleUrls: ['./result-decrypt.component.css']
})
export class ResultDecryptComponent implements OnInit {

  @Input() data: Array<{
    count: number,
    text: string
  }> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
