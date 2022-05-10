import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
  title = "Put the generated hash here to see the word decrypted again";
  labelForm = "Hash generated";
  buttonText = "Decrypt";

  constructor() { }

  ngOnInit(): void {
  }

}
