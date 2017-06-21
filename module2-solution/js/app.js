(function (){
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//defining 1st controller
	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buyList =this;

		buyList.items = ShoppingListCheckOffService.getItems();
		buyList.removeItem = function(itemIndex){
			ShoppingListCheckOffService.removeItem(itemIndex);
		};                


	}

//2nd controller
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtList = this;
		boughtList.items2 = ShoppingListCheckOffService.getItems2();
}	

// defining service 
	function ShoppingListCheckOffService(){
		var service=this;
		var items = [{name:"cookies", quantity:10},
						{name:"cake",quantity:3},
					 	{name:"Juice", quantity:2},
					 	{name:"chips", quantity:7},
					 	{name:"Ice Cream",quantity:2}];
		var items2 = [];

//removing item from buy list
		service.removeItem = function(itemIdex){
			items2.push(items[itemIdex]);
			items.splice(itemIdex,1);
		};              
//adding item to bought list
		service.addItem = function(){

		};
//returning item to buy list
		service.getItems = function(){
			return items;
		};

//returning item to bought list
		service.getItems2 = function(){
			return items2;
		};

	}

})();