const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;


for (const key of Object.keys(user)) {
  const value = user[key];
  console.log(`${key}: ${value}`);
}


const countProps = obj => Object.keys(obj).length;
console.log(countProps({ name: "Alice", age: 25, city: "Kyiv" })); 


const findBestEmployee = employees => {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};
console.log(findBestEmployee({ Alice: 10, Bob: 20, Charlie: 15 })); 


const countTotalSalary = employees =>
  Object.values(employees).reduce((total, salary) => total + salary, 0);

console.log(countTotalSalary({ Alice: 1000, Bob: 1500, Charlie: 1200 })); 


const getAllPropValues = (arr, prop) =>
  arr.map(obj => obj[prop]).filter(value => value !== undefined);

console.log(
  getAllPropValues([{ name: "Laptop", price: 1000 }, { name: "Phone", price: 500 }], "name")
); 


const calculateTotalPrice = (allProducts, productName) => {
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) return price * quantity;
  }
  return 0;
};

console.log(
  calculateTotalPrice([{ name: "Phone", price: 500, quantity: 5 }], "Phone")
); 





const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  
  createTransaction(amount, type) {
    return { id: this.transactions.length + 1, amount, type };
  },

  
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
    console.log(`Депозит: +${amount} грн. Баланс: ${this.balance} грн`);
  },

  
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття.");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
    console.log(`Знято: -${amount} грн. Баланс: ${this.balance} грн`);
  },

  
  getBalance() {
    console.log(`Ваш баланс: ${this.balance} грн`);
    return this.balance;
  },


  getTransactionDetails(id) {
    const transaction = this.transactions.find(t => t.id === id);
    console.log(transaction || "Транзакція не знайдена");
    return transaction || null;
  },

  getTransactionTotal(type) {
    const total = this.transactions
      .filter(t => t.type === type)
      .reduce((sum, { amount }) => sum + amount, 0);

    console.log(`Сума всіх ${type}: ${total} грн`);
    return total;
  },
};


account.deposit(1000);
account.withdraw(500);
account.getBalance();
account.getTransactionTotal("deposit");
account.getTransactionTotal("withdraw");
account.getTransactionDetails(1);
