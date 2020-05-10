(function () {
    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController",AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy=this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy = function (item){
            ShoppingListCheckOffService.buyItem(item);
        
        } 
        
    }


    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought=this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
        
    }


    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems=[ {name:"cookie", quantity:"5"},
            {name:"chips", quantity:"2"},
            {name:"cake", quantity:"1"},
            {name:"milk", quantity:"3"},
            {name:"coke", quantity:"10"}                
            ];
      
            var boughtItems=[];
      
        service.buyItem = function(item) {
          boughtItems.push(item);
          toBuyItems.splice(item, 1);
        };
      
        service.getToBuyItems = function () {
          return toBuyItems;
        };
      
        service.getBoughtItems = function () {
          return boughtItems;
        };
      }


})();