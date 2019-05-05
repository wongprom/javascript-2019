//BUDGETCONTROLLER
var budgetController = (function () {

  //SOme code

})();

//UICONTROLLER
var UIController = (function () {

  //some code

})();
//GLOBAL APP CONTROLLER
var controller = (function (bugetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    //1 get the field input data

    //2 add the item to the budget controller

    //3 add the item to the UI controller

    //4 calculate the budget

    //5 display the budget on the UI
    console.log('rgrgergergerg');
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  })

})(budgetController, UIController);