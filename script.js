// a-z charCodes => 97 - 122
const utf8encoder = new TextEncoder();
// const text = "z";
// const res = utf8encoder.encode(text)[0];

const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

class Cipher {
  constructor(cipherKey) {
    this.cipherKey = cipherKey ? cipherKey : this.key;
    this.message = "";
    this.encoded = "";
    this.decoded = "";
  }

  encode(message) {
    message && (this.message = message);
    let y = 0;

    for (let x = 0; x < this.message.length; x++) {
      // Check for cipherKey overflow
      if (y === this.cipherKey.length) y = 0;
      //   let y = x;
      // Message charCode
      const shiftee = utf8encoder.encode(this.message)[x];
      // Cipher charCode
      const shifter = utf8encoder.encode(this.cipherKey)[y] - 97;
      // New cipher charCode
      let res = shiftee + shifter;
      //   Check for alpha overflow
      if (res > 122) {
        res = res - 122;
        res = 96 + res;
      }
      //   New cipher char
      this.encoded += String.fromCharCode(res);
      y++;
    }
    return this.encoded;
  }

  decode(keyCode) {
    let y = 0;
    for (let x = 0; x < keyCode.length; x++) {
      // Check for cipherKey overflow
      if (y === keyCode.length) y = 0;
      // Message charCode
      const shiftee = utf8encoder.encode(keyCode)[x];
      // Cipher charCode
      const shifter = utf8encoder.encode(this.cipherKey)[y] - 97;
      // New cipher charCode
      let res = shiftee - shifter;
      //   Check for alpha overflow
      if (res < 97) {
        res = 97 - res;
        res = 123 - res;
      }
      //   New cipher char
      this.decoded += String.fromCharCode(res);
      y++;
    }
    return this.decoded;
  }

  get key() {
    if (this.cipherKey) return this.cipherKey;

    let randKey = "";
    for (let x = 0; x < 100; x++) {
      const num = parseInt(Math.random() * 25 + 97);
      randKey += String.fromCharCode(num);
    }
    return randKey;
  }
}

// -------------    Random key cipher   --------------

// can encode
const cipher0 = new Cipher();
const res0 = cipher0.encode("aaaaaaaaaa"); //  .toEqual(cipher.key.substring(0, 10));

// can decode
const res1 = cipher0.decode(cipher0.key.substring(0, 10)); //  .toEqual('aaaaaaaaaa');

// is reversible
const cipher1 = new Cipher();
const plaintext = "abcdefghij";
const enc = cipher1.encode(plaintext)
const res2 = cipher1.decode(enc); //  .toEqual(plaintext);

// // key is made only of lowercase letters
// const res3 = Boolean(cipher1.key.match(/^[a-z]+$/)); //  .toMatch(/^[a-z]+$/);

// // -------------    Substitution cipher   --------------

// // can encode
// const key = "abcdefghij";
// const cipher2 = new Cipher(key);
// const res4 = cipher2.encode("aaaaaaaaaa"); //  .toEqual('abcdefghij');

// // can decode
// const res5 = cipher2.decode("abcdefghij"); //  .toEqual('aaaaaaaaaa');

// // is reversible
// const cipher3 = new Cipher(key);
// const res6 = cipher3.decode(cipher3.encode("abcdefghij")); //  .toEqual('abcdefghij');

// // can double shift encode
// const res7 = new Cipher("iamapandabear").encode("iamapandabear")    //  .toEqual("qayaeaagaciai");

// // can wrap on encode
// const cipher4 = new Cipher(key);
// const res8 = cipher4.encode('zzzzzzzzzz')   //  .toEqual('zabcdefghi');

// // can wrap on decode
// const res9 = cipher4.decode('zabcdefghi')   //  .toEqual('zzzzzzzzzz');

// // can encode messages longer than the key
// const res10 = new Cipher('abc').encode('iamapandabear') //  .toEqual('iboaqcnecbfcr');

console.log(res0);
console.log(res1);
console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);
// console.log(res8);
// console.log(res9);
// console.log(res10);
