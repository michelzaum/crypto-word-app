import { Injectable } from '@angular/core';
import { alphabet } from '../utils/alphabet';

@Injectable({
  providedIn: 'root'
})

export class DecryptionService {
  constructor() { }

  decryption(value: String): string {
    let hash = "ismyhash";
    const encryptedText = value.replace(/\s/g, '');

    const initialHashLength = hash.length;
    const encryptedTextGreaterThanHash = encryptedText.length > hash.length;

    hash += encryptedText.substring(0, encryptedText.length - hash.length)

    const hashToArray = hash.split('');
    const encryptedTextToArray = encryptedText.split('');

    let indexOfItemsHash: Array<number> = [];
    hashToArray.forEach(item => {
      indexOfItemsHash.push(alphabet.indexOf(item))
    });

    let indexOfEncryptedText: Array<number> = [];
    encryptedTextToArray.forEach(item => {
      indexOfEncryptedText.push(alphabet.indexOf(item));
    });

    let indexOfItemsPlainText: Array<number> = [];
    function formatPlainText() {
      if (indexOfItemsPlainText.length > 0) {
        indexOfItemsPlainText = [];
      };

      for (let i = 0; i < indexOfEncryptedText.length; i++) {
        let result = indexOfEncryptedText[i] - indexOfItemsHash[i];
    
        if(result < 0) {
          result = alphabet.length - Math.abs(result);
        };
    
        indexOfItemsPlainText.push(result);
      };
      
      return indexOfItemsPlainText;
    };

    formatPlainText();

    if (encryptedTextGreaterThanHash) {
      let count = 0;
      for (let i = initialHashLength; i < encryptedText.length; i++) {
        indexOfItemsHash[i] = indexOfItemsPlainText[count];
        count++;
      };

      formatPlainText();
    };

    let plainText = "";
    indexOfItemsPlainText.forEach(item => {
      if (item > alphabet.length - 1) {
        item = item - alphabet.length;
      };

      plainText += alphabet[item];
    });
    
    return plainText;
  };
};
