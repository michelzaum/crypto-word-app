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

  constructor(private encryptService: EncryptionService) { }

  ngOnInit(): void { }

  encrypt() {
    this.encryptService.encryption(this.textToEncrypt);
    this.textToEncrypt = "";
  }
}
