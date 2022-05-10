import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})

export class EncryptComponent implements OnInit {
  title = "Encrypt text";
  labelForm = "Text to encrypt";
  buttonText = "Encrypt";

  constructor() { }

  ngOnInit(): void {
  }
}
