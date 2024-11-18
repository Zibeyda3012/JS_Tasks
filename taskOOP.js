class Account {
  #balance;

  constructor(balance) 
  {
    this.balance = balance;
  }

  getBalanceInfo()
  {
    console.log(`Your balance is ${this.balance}`);
  }
}

class BankAccount extends Account{
 
    constructor(balance)
    {
       super(balance);
    }

    cashIn(amount){
        this.balance+=amount;
    }

    cashOut(amount){
        if(amount<=this.balance)
            this.balance -= amount;
        else
        console.log("There is NOT enough amount in your balance!!!");

        
    }
 
}


const myAccount = new BankAccount(100);
myAccount.getBalanceInfo();
 myAccount.cashIn(200);
 myAccount.cashIn(200);
 myAccount.getBalanceInfo();
 myAccount.cashOut(400);
 myAccount.getBalanceInfo();
