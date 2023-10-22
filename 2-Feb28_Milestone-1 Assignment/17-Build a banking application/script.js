const customer = {
    name: "Aman",
    balance: 50000,
    update: function (deposite, withdrawal) {
        this.balance = ((this.balance + deposite) - withdrawal);
    }
};

console.log(customer);
customer.update(21000, 10000);
console.log(customer);