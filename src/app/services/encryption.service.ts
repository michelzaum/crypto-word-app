import { Injectable } from '@angular/core';
import { alphabet } from '../utils/alphabet';

@Injectable({
  providedIn: 'root'
})

export class EncryptionService {
  constructor() { };
  
  encryption(value: string): string {
    let hash = "ismyhash";
    const textToEncrypt = value.replace(/\s/g, '');

    hash += textToEncrypt.substring(0, textToEncrypt.length - hash.toString().length);

    const hashToArray = hash.toString().split('');
    const textToArray = textToEncrypt.split('');

    const indexOfHashItems = hashToArray.map((hashItem: string) => (
      alphabet.indexOf(hashItem)
    ));

    const indexOfTextItems = textToArray.map(textItem => (
      alphabet.indexOf(textItem)
    ));

    const sumOfIndexes = [];
    for (let i = 0; i < indexOfHashItems.length; i++) {
      sumOfIndexes.push(indexOfHashItems[i] + indexOfTextItems[i]);
    };

    let encryptedText = "";
    sumOfIndexes.forEach(item => {
      if (item >= alphabet.length) {
        item = item - alphabet.length;
      };

      encryptedText += alphabet[item];
    });

    return encryptedText;
  };
};
