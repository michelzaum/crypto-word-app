import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-encrypt',
  templateUrl: './result-encrypt.component.html',
  styleUrls: ['./result-encrypt.component.css']
})

export class ResultEncryptComponent implements OnInit {
  @Input() data: Array<{
    count: number,
    textResult: string,
  }> = [];

  constructor() { }

  ngOnInit(): void { }
}