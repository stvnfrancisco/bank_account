var BankAccount = {
  balance: 0,

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },

};

$(document).ready(function() {

  var newBankAccount = Object.create(BankAccount)

  $("form#signup").submit(function(event){
    var inputtedName = $("input#name").val();
    var initialBalance = parseInt($("input#initial").val());
    isNaN(initialBalance) ? initialBalance = 0 : initialBalance = initialBalance;
    newBankAccount.owner = inputtedName
    newBankAccount.deposit(initialBalance)


    $("input#name").val("");
    $("input#initial").val("");

    $("#banking").show();
    $("#status").show();

    $(".balance").text(newBankAccount.balance)

    event.preventDefault();
  });

  $("form#depositwithdraw").submit(function(event){
    var depositAmount = parseInt($("input#deposit").val());
    var withdrawalAmount = parseInt($("input#withdraw").val());
    isNaN(depositAmount) ? depositAmount = 0 : depositAmount = depositAmount;
    isNaN(withdrawalAmount) ? withdrawalAmount = 0 : withdrawalAmount = withdrawalAmount;

    newBankAccount.withdraw(withdrawalAmount);
    newBankAccount.deposit(depositAmount);

    $("input#deposit").val("");
    $("input#withdraw").val("");

    $("#banking").show();
    $("#status").show();

    $(".balance").text(newBankAccount.balance)

    event.preventDefault();
  });

});
