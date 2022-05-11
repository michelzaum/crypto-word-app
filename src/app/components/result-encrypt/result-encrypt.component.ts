import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-encrypt',
  templateUrl: './result-encrypt.component.html',
  styleUrls: ['./result-encrypt.component.css']
})

export class ResultEncryptComponent implements OnInit {
  @Input() word: string = "";
  @Input() count: number = 0;

  constructor() { }

  ngOnInit(): void { }
}