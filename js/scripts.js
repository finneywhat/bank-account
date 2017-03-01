function Bank (name, deposit) {
  this.name = name;
  this.deposit = deposit;
}

Bank.prototype.withdrawal = function() {
  return this.deposit-this.withdrawal;
}

$(document).ready(function(){

  var balance;
  var initialB;
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userFullName = $("#fullName").val();
    var userDeposit = parseInt($("#initialDeposit").val());

    initialB = new Bank(userFullName, userDeposit);
    balance = initialB.deposit;
  });
  $("#secondDo").click(function() {
    var userWithdrawal = parseInt($("#withdrawal").val());
    var userAddDeposit = parseInt($("#additionalDeposit").val());
    initialB.withdrawal = userWithdrawal;
    initialB.withdrawal();
    console.log(initialB);
  })
});
