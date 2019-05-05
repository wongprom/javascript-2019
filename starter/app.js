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
  document.querySelector('.add__btn').addEventListener('click', function () {
    console.log('button is clicked');
  })

})(budgetController, UIController);