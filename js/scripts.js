var BankAccount = {
  balance: 0.0,

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },

};

$(document).ready(function() {

  var newBankAccount = Object.create(BankAccount);

  $("form#signup").submit(function(event){
    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var initialBalance = parseInt($("input#initial").val());
    isNaN(initialBalance) ? initialBalance = 0.0 : initialBalance = initialBalance;
    newBankAccount.owner = inputtedFirstName + " " + inputtedLastName;
    newBankAccount.deposit(initialBalance);
    var clearFields = function() {
      $("input#first-name").val("");
      $("input#last-name").val("");
      $("input#initial").val("");
    }

    $("#banking").show();
    $("#status").show();

    $(".balance").text(newBankAccount.balance);
    $(".first-name").text(newBankAccount.owner);
    $(".last-name").text(newBankAccount.owner);

    event.preventDefault();
  });

  $("form#depositwithdraw").submit(function(event){
    var depositAmount = parseInt($("input#deposit").val());
    var withdrawalAmount = parseInt($("input#withdraw").val());
    isNaN(depositAmount) ? depositAmount = 0.0 : depositAmount = depositAmount;
    isNaN(withdrawalAmount) ? withdrawalAmount = 0.0: withdrawalAmount = withdrawalAmount;

    newBankAccount.withdraw(withdrawalAmount);
    newBankAccount.deposit(depositAmount);

    $("input#deposit").val("");
    $("input#withdraw").val("");

    $("#banking").show();
    $("#status").show();

    $(".balance").text(newBankAccount.balance);
    $(".first-name").text(newBankAccount.owner);
    $(".last-name").text(newBankAccount.owner);

    event.preventDefault();
  });

});
