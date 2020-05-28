createTransaction = (transaction) => {
    user.transactions.push(transaction);

    if(transaction.type == 'credit') {
        user.balance += transaction.value;
    } else if(transaction.type == 'debit') {
        user.balance -= transaction.value;
    }

};

getHigherTransactionByType = (type) => {
    var bigger = null;
    user.transactions.forEach(element => {
        if(element.type == type) {
            if(bigger == null)  {
                bigger = element.value;
            } else if (element.value > bigger){
                bigger = element.value;
            }
        }
        
        
    });
    return bigger;
}

getAverageTransactionValue = () => (
    user.transactions.map(elem => elem.value).reduce((total, element) => total + element) / user.transactions.length
);

getTransactionsCount = () => (
    {
        credit: user.transactions.filter((transaction) => transaction.type == 'credit').length,
        debit:  user.transactions.filter((transaction) => transaction.type == 'debit').length
    }
)


var user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.transactions.reduce((total, element) => total + element.value));

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }