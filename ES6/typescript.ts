class Account {
  id: number;
  name: string;
  balance: number;

  constructor(id:number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}

class SavingAccount extends Account {
  interest: number;

  constructor(id: number, name: string, balance: number, interest: number) {
    super(id, name, balance);
    this.interest = interest;
  }
}

class CurrentAccount extends Account {
  cashCredit: number;

  constructor(id: number, name: string, balance: number, cashCredit: number) {
    super(id, name, balance);
    this.cashCredit = cashCredit;
  }
}

// Create account objects
const savingAccount1 = new SavingAccount(1, "Saver1", 5000, 0.02);
const savingAccount2 = new SavingAccount(2, "Saver2", 8000, 0.03);
const currentAccount1 = new CurrentAccount(3, "Current1", 10000, 500);
const currentAccount2 = new CurrentAccount(4, "Current2", 15000, 1000);

// Function to calculate total balance in the bank
function calculateTotalBalance(accounts: Account[]): number {
  return accounts.reduce((total, account) => total + account.balance, 0);
}

// Create an array of all accounts
const accounts: Account[] = [savingAccount1, savingAccount2, currentAccount1, currentAccount2];

// Calculate and display the total balance in the bank
const totalBalance = calculateTotalBalance(accounts);
console.log(`Total Balance in the Bank: $${totalBalance}`);
