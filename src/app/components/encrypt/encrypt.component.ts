import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../../services/encryption.service';

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
  countCharacters = 16;

  data = [{
    textResult: "",
    count: 0,
  }];

  constructor(private encryptService: EncryptionService) { }

  ngOnInit(): void {
    const input = document.getElementById('txtEncrypt');

    input?.addEventListener('keydown', () => {
        this.countCharacters = Number(input.getAttribute('ng-reflect-maxlength')) - this.textToEncrypt.length;
    });
  };

  encrypt() {
    if (this.textToEncrypt === "") {
      return;
    ;}
    
    if (this.textToEncrypt.length < 8) {
      alert('Please enter at least 8 characters');
      return;
    };

    if (this.textToEncrypt.length > 16) {
      alert('Please enter a maximum of 16 characters');
      return;
    };
      
    const text = this.encryptService.encryption(this.textToEncrypt);
    this.data.push({ textResult: text, count: this.data.length });
    this.textToEncrypt = "";
  };
}
