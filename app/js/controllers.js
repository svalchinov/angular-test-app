'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);


myApp.controller('barController', function($scope, API, Bar, Orders, localStorageService) {

	// bars
	$scope.bar;
	$scope.bars = API.getBars().then(function(result){
		$scope.bars = angular.fromJson(result.data.bars);
	});

	$scope.select = function(bar) {
		Bar.set(bar);
		$scope.bar = Bar.get();
		$scope.bar.products = {};
		$scope.status.isopen = !$scope.status.isopen;

		// get products
		$scope.products = API.getProducts().then(function(result){
			$scope.products = angular.fromJson(result.data.products);	
			for(var i=0;i<$scope.products.length;i++) {				
				$scope.bar.products[$scope.products[i].id] = $scope.products[i];
			}		

		// get prices
		$scope.prices = API.getPrices().then(function(result){
			var prices = result.data.prices;		
			for(var i=0; i<prices.length;i++) {	
				// find bar
				if(prices[i].bar_id === $scope.bar.id) {
					$scope.bar.products[prices[i].product_id].price = prices[i].current_price;					
				}
			}

			// clean up bar object from unavailable products
			for(var prop in $scope.bar.products) {
				if($scope.bar.products.hasOwnProperty(prop)) {
					if($scope.bar.products[prop].price === undefined){
						delete $scope.bar.products[prop];
					}
				}
			}
		});
	});
	};

	$scope.addToOrder = function(product){
		Orders.add(product);
		Orders.save();
	};
});



myApp.controller('cartController', function($scope, Bar, Orders, Rounds) {
	$scope.orders = Orders.get();
	$scope.total = function(){
		var total = 0;
		for(var i=0;i<$scope.orders.length;i++){
			var product = $scope.orders[i];
			total += parseFloat(product.price);
		}
		return total.toFixed(2);
	};

	$scope.sendToBar = function(){
		// normally an API call to save the round of drinks
		var d = new Date();
		Rounds.add({
			bar: Bar.get(),
			total: $scope.total(),
			orders: $scope.orders,
			ordered_at: d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes()
		});
		Orders.clear();
		$scope.orders = Orders.get();
	};

	$scope.remove = function(product){
		Orders.remove(product);
		Orders.save();
	};
});


myApp.controller('roundsController', function($scope, Rounds) {
	$scope.rounds = Rounds.get();
	$scope.clearRounds = function(){
		Rounds.clear();
		$scope.rounds = Rounds.get();
	};
	$scope.total = function(){
		var total = 0;
		for(var i=0;i<$scope.rounds.length;i++){
			var price = $scope.rounds[i].total;			
			total += parseFloat(price);
		}
		return total.toFixed(2);
	};
});