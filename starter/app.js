//BUDGETCONTROLLER
var budgetController = (function () {

  //SOme code

})();

//UICONTROLLER
var UIController = (function () {

  return {
    getInput: function () {
      return {
        type: document.querySelector('.add__type').value, // Will be either inc or exp
        description: document.querySelector('.add__description').value,
        value: document.querySelector('.add__value').value,
      };
    }
  }


})();
//GLOBAL APP CONTROLLER
var controller = (function (bugetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    //1 get the field input data
    var input = UICtrl.getInput();
    console.log("OUTPUT: ctrlAddItem -> input", input)
    //2 add the item to the budget controller

    //3 add the item to the UI controller

    //4 calculate the budget

    //5 display the budget on the UI

  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  })

})(budgetController, UIController);