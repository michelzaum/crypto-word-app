import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../../services/encryption.service';
import { isValidValue } from '../../utils/isValidValue';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})

export class EncryptComponent implements OnInit {
  title = "Encrypt text";
  labelForm = "Text to encrypt";
  buttonText = "Encrypt";

  textToEncrypt = "";
  inputMaxLength = 0;
  countCharacters = 16;

  data = [{
    textResult: "",
    count: 0,
  }];

  constructor(private encryptService: EncryptionService) { }

  ngOnInit(): void {
    const input = document.getElementById('txtEncrypt');
    this.inputMaxLength = Number(input?.getAttribute('maxlength'));

    input?.addEventListener('keyup', () => {
        this.countCharacters = this.inputMaxLength - this.textToEncrypt.length;

        if (this.textToEncrypt.length > this.inputMaxLength) {
          input.classList.add('danger');
        } else {
          input.classList.remove('danger');
        };
    });
  };

  encrypt() {
    if (!isValidValue(this.textToEncrypt)) {
      return;
    };

    const text = this.encryptService.encryption(this.textToEncrypt.toLowerCase());
    this.data.push({ textResult: text, count: this.data.length });
    
    this.textToEncrypt = "";
    this.countCharacters = this.inputMaxLength;
  };
};
