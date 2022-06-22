import { Component, OnInit } from '@angular/core';
import { DecryptionService } from '../../services/decryption.service';
import { isValidValue } from '../../utils/isValidValue';

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
  inputMaxLength = 0;
  countCharacters = 16;

  data = [{
    text: "",
    count: 0,
  }];

  constructor(private decryptionService: DecryptionService) { }

  ngOnInit(): void {
    const input = document.getElementById('txtDecrypt');
    this.inputMaxLength = Number(input?.getAttribute('maxlength'));

    input?.addEventListener('keyup', () => {
        this.countCharacters = this.inputMaxLength - this.textToDecrypt.length;

        if (this.textToDecrypt.length > this.inputMaxLength) {
          input.classList.add('danger');
        } else {
          input.classList.remove('danger');
        };
    });
  };

  decrypt() {
    if (!isValidValue(this.textToDecrypt)) {
      return;
    };
    
    const decryptedText = this.decryptionService.decryption(this.textToDecrypt);
    this.data.push({ text: decryptedText, count: this.data.length });

    this.textToDecrypt = "";
    this.countCharacters = this.inputMaxLength;
  };
};
