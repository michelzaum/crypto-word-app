<h1 align="center">Crypto word app 🚀️</h1>

## About 💡️
- This project is an application that you can use to encrypt words. The encryption happens using a merge of the concepts of [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) and [Polyalphabetic cipher](https://en.wikipedia.org/wiki/Polyalphabetic_cipher#:~:text=A%20polyalphabetic%20cipher%20is%20any,is%20a%20simplified%20special%20case.), which basically consist of encrypting words with characters substitutions.

## How to use the application❓️
- After filling the field with your word and encrypting it, it will appear in the list of encrypted words, as a random hash. In addition, you can see the decrypted word again. Just put the generated hash in the decryption field, which is next to the encryption field. But, there are some rules for encryption to work well.

## Rules for encryption to work ⚠️
- Only use letters (from A to Z): This is because the Ciphers used in this project, only include the alphabet. But, I'm planning to update this project to allow using more characters. Wait 👀️
- Minimum 8 and maximum 16 characters: This will depend on the length of the hash used in the project. Among the scenarios which I tested, I faced some issues in decryption caused by words too short and too long as well. (It's a little difficcult to explain in a few words...but feel free to ask me for more details).

## Running application locally 💻️

```bash
# Clone repository
$ git clone git@github.com:michelzaum/crypto-word-app.git

# Go to the project directory
$ cd crypto-word-app

# Install the dependencies
$ npm install

# Run application
$ npm start (The application will open in a browser. If not, it can be accessed from the link http://localhost:4200/)
```
<p align="center">Created with ❤️ by michelzaum</span>