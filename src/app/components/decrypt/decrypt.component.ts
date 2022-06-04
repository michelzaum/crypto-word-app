import { Component, OnInit } from '@angular/core';
import { DecryptionService } from '../../services/decryption.service';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
  title = "See the word decrypted again";
  labelForm = "Hash generated";
  buttonText = "Decrypt";

  textToDecrypt = "";

  data = [{
    text: "",
    count: 0,
  }];

  constructor(private decryptionService: DecryptionService) { }

  ngOnInit(): void {
  }

  decrypt() {
    const decryptedText = this.decryptionService.decryption(this.textToDecrypt);
    this.data.push({ text: decryptedText, count: this.data.length });
    this.textToDecrypt = "";
  };
};
