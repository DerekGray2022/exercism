// go

class BankAccount {
  constructor() {
    this.status = false;
    this._balance = 0;
  }

  open() {
    if (this.status) throw new ValueError();
    this.status = true;
  }

  close() {
    if (!this.status) throw new ValueError();
    this.status = false;
    this._balance = 0;
  }

  deposit(deposit) {
    if (!this.status || deposit < 0) throw new ValueError();
    this._balance += deposit;
  }

  withdraw(deposit) {
    if (!this.status || deposit > this._balance || deposit < 0) throw new ValueError();
    this._balance -= deposit;
  }

  get balance() {
    if (!this.status) throw new ValueError();
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}

// ----------------------------------------------------

//  Bank Account

// //  newly opened account has zero balance
// const account0 = new BankAccount();
// account0.open();
// const res0 = account0.balance; //  .toEqual(0);

// //  Single deposit
//   const account1 = new BankAccount();
//   account1.deposit(100);
//   const res1 = account1.balance  //  .toEqual(100);

// //  Multiple deposits
//   const account2 = new BankAccount();
//   account2.open();
//   account2.deposit(100);
//   account2.deposit(50);
//   const res2 = account2.balance  //  .toEqual(150);

// //  Withdraw once
//   const account3 = new BankAccount();
//   account3.open();
//   account3.deposit(100);
//   account3.withdraw(50);
//   const res3 = account3.balance  //  .toEqual(50);

// //  Withdraw twice
//   const account4 = new BankAccount();
//   account4.open();
//   account4.deposit(100);
//   account4.withdraw(20);
//   account4.withdraw(80);
//   const res4 = account4.balance  //  .toEqual(0);

// //  Can do multiple operations sequentially
//   const account5 = new BankAccount();
//   account5.open();
//   account5.deposit(100);
//   account5.deposit(110);
//   account5.withdraw(200);
//   account5.deposit(60);
//   account5.withdraw(50);
//   const res5 = account5.balance  //  .toEqual(20);

// //  Cannot check balance of closed account
//   const account6 = new BankAccount();
//   account6.open();
//   account6.close();
//   const res6 = () => account6.balance  //  .toThrow(ValueError);

// //  Cannot deposit into closed account
//   const account7 = new BankAccount();
//   account7.open();
//   account7.close();
//   const res7 = () => {account7.deposit(50);} //  .toThrow(ValueError);

// //  Cannot deposit into unopened account
//   const account8 = new BankAccount();
//   const res8 = () => {account8.deposit(50);} //  .toThrow(ValueError);

// //  Cannot withdraw from closed account
//   const account9 = new BankAccount();
//   account9.open();
//   account9.close();
//   const res9 = () => {account9.withdraw(50);}  //  .toThrow(ValueError);

// //  Cannot close an account that was not opened
//   const account10 = new BankAccount();
//   const res10 = () => {account10.close();} //  .toThrow(ValueError);

// //  "Cannot open an already opened account
//   const account11 = new BankAccount();
//   account11.open();
//   const res11 = () => {account11.open();}  //  .toThrow(ValueError);

// //  Reopened account does not retain balance
//   const account12 = new BankAccount();
//   account12.open();
//   account12.deposit(50);
//   account12.close();
//   account12.open();
//   const res12 = account12.balance  //  .toEqual(0);

// //  Cannot withdraw more than deposited
//   const account13 = new BankAccount();
//   account13.open();
//   account13.deposit(25);
//   const res13 = () => {account13.withdraw(50);} //  .toThrow(ValueError);

// //  Cannot withdraw negative
//   const account14 = new BankAccount();
//   account14.open();
//   account14.deposit(100);
//   const res14 = () => {account14.withdraw(-50);} //  .toThrow(ValueError);

// //  Cannot deposit negative
//   const account15 = new BankAccount();
//   account15.open();
//   const res15 = () => {account15.deposit(-50);}  //  .toThrow(ValueError);

// //  Can handle concurrent transactions
//   const account16 = new BankAccount();
//   let res16;
//   account16.open();
//   account16.deposit(1000);
//   for (let i = 0; i < 10; i++) {
//     await adjustBalanceConcurrently(account16);
//     res16 = account16.balance  //  .toEqual(1000);
//   }

// function adjustBalanceConcurrently(account) {
//   const random = () => Math.floor(Math.random() * 10);
//   const tasks = Array.from(
//     { length: 1000 },
//     () =>
//       new Promise((resolve) => {
//         try {
//           account.deposit(5);
//           setTimeout(() => {
//             account.withdraw(5);
//             resolve();
//           }, random());
//         } catch (e) {
//           throw new Error(`Exception should not be thrown: ${e.message}`);
//         }
//       }),
//   );
//   return Promise.all(tasks);
// }

//  Changing balance directly throws error
const account17 = new BankAccount();
  account17.open();
  const res17 = () => {account17.balance = 100;} //  .toThrow(Error);};

// ---------------------------------------

// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6());
// console.log(res7());
// console.log(res8());
// console.log(res9());
// console.log(res10());
// console.log(res11());
// console.log(res12);
// console.log(res13());
// console.log(res14());
// console.log(res15());
// console.log(res16);
console.log(res17());
