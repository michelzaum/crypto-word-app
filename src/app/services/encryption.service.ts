import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EncryptionService {
  hash = "myhash";
  
  alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  
  constructor() { };
  
  encryption(textToEncrypt: string): string {
    this.hash += textToEncrypt.substring(0, textToEncrypt.length - this.hash.length);

    const hashToArray = this.hash.split('');
    const textToArray = textToEncrypt.split('');

    const indexOfHashItems = hashToArray.map(hashItem => (
      this.alphabet.indexOf(hashItem)
    ));

    const indexOfTextItems = textToArray.map(textItem => (
      this.alphabet.indexOf(textItem)
    ));

    const sumOfIndexes = [];
    for (let i = 0; i < indexOfHashItems.length; i++) {
      sumOfIndexes.push(indexOfHashItems[i] + indexOfTextItems[i]);
    };

    let encryptedText = "";
    sumOfIndexes.forEach(item => {
      if (item > this.alphabet.length) {
        item = item - this.alphabet.length;
      };
      
      encryptedText += this.alphabet[item];
    });

    return encryptedText;
  };
};
