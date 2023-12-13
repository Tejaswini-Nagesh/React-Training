//constant
/*const myconst=22;
myconst=90;
console.log(myconst);
*/

//2.Declare a variable inside if condition & make sure that it is not accessible outside if condition.
/*let x=20;
if(x){
    let y=40;
}
console.log(x);
console.log(y);
*/

//3.Create an ‘Order’ object having data members ‘id’, ‘title’, ‘price’. Add the methods printOrder() &getPrice(). Now, copy the order object using Object.assign().
/*const order={
    id:1,
    title:"sample order",
    price:100,
    printOrder(){
        console.log(order);
    },
    getPrice(){
        console.log(order.price);
    }
}
order.printOrder();
order.getPrice();
const copiedOrder = Object.assign({}, order);
console.log(copiedOrder);
*/
//Arrow function

/*let names=["tom","lvan","jerry"];
let newArray=names.map((ele)=>({
    name:ele,
   length: ele.length
}));
console.log(newArray);
*/
//Write a add() with default values.
/*let add=(a=9,b=1)=>{
    return a+b;

}
console.log(add(6));
*/
/*function foo(x,y,...z)
{
    console.log(x,y,z);
}
foo(24,90,98,20);
*/

//rest parameter
/*function userFriend(username,...friends){
    console.log(username);
    console.log(friends);
}
userFriend("neha","sneha","john","keya");
*/
//spread operator
const namesArray = ['john', 'bob', 'david'];

let printCapitalNames = (...namesArray) => {
  return namesArray.map((name) => name.toUpperCase());
};

const capitalizedNames = printCapitalNames(...namesArray);
console.log(capitalizedNames);

//Destructuring assignment
const myArray = [10, 20, 30, 40];

const thirdElement = myArray[2];

console.log(thirdElement);

//====================
let a=[2,3,4];
let b=[...a,8];
console.log(b);
//oraganization object
const oraganization={
    name:"xyz",
    address:{
        street:"123 main street",
        city:"pume",
        pincode:"1234"
    }
};
console.log(oraganization.address.pincode);
//
// Define the Account class
class Account {
    constructor(id, name, balance) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
  }
  
  class SavingAccount extends Account {
    constructor(id, name, balance, interest) {
      super(id, name, balance);
      this.interest = interest;
    }
  }
  
  class CurrentAccount extends Account {
    constructor(id, name, balance, cashCredit) {
      super(id, name, balance);
      this.cashCredit = cashCredit;
    }
  }
  
  const saving1 = new SavingAccount(1, 'John Doe', 5000, 0.05);
  const saving2 = new SavingAccount(2, 'Alice Smith', 7000, 0.04);
  const current1 = new CurrentAccount(101, 'Bob Johnson', 10000, 2000);
  const current2 = new CurrentAccount(102, 'Eve Wilson', 8000, 1500);
  
  function getTotalBankBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      totalBalance += account.balance;
    }
    return totalBalance;
  }
  
  const allAccounts = [saving1, saving2, current1, current2];
  
  const totalBalance = getTotalBankBalance(allAccounts);
  console.log(`Total Balance in the Bank: $${totalBalance}`);
  //================
  const promiseX = new Promise((resolve) => {
    setTimeout(() => {
      const x = 10; 
      resolve(x);
    }, 1000); 
  });
  
  
  const promiseY = new Promise((resolve) => {
    setTimeout(() => {
      const y = 20; 
      resolve(y);
    }, 1500); 
  });
  
  
  Promise.all([promiseX, promiseY])
    .then(([x, y]) => {
      const sum = x + y;
      console.log(`Sum of x and y is: ${sum}`);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  const lapi={
      name4:"Dell",
      model:"122h",
      no:12889
  }
  console.log(`my lapi is ${name4} and ${model} ${no}`);