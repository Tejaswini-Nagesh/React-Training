var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cashCredit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cashCredit = cashCredit;
        return _this;
    }
    return CurrentAccount;
}(Account));
// Create account objects
var savingAccount1 = new SavingAccount(1, "Saver1", 5000, 0.02);
var savingAccount2 = new SavingAccount(2, "Saver2", 8000, 0.03);
var currentAccount1 = new CurrentAccount(3, "Current1", 10000, 500);
var currentAccount2 = new CurrentAccount(4, "Current2", 15000, 1000);
// Function to calculate total balance in the bank
function calculateTotalBalance(accounts) {
    return accounts.reduce(function (total, account) { return total + account.balance; }, 0);
}
// Create an array of all accounts
var accounts = [savingAccount1, savingAccount2, currentAccount1, currentAccount2];
// Calculate and display the total balance in the bank
var totalBalance = calculateTotalBalance(accounts);
console.log("Total Balance in the Bank: $".concat(totalBalance));
