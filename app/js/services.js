'use strict';

/* Services */

var myApp = angular.module('myApp.services', []);

myApp.service('API', function($http) {
	return {
		getBars: function(){
            return $http.get('../data/bars.json');
        },
        getProducts: function(){
            return $http.get('../data/products.json');
        },
        getPrices: function(){
            return $http.get('../data/prices.json');
        }
    }
});

myApp.service('Bar', function($http, localStorageService) {
    var bar = {};
    return {
        get: function(){
            return bar;
        },
        set: function(activeBar){         
            bar = activeBar;
        }        
    }
});

myApp.service('Orders', function($http, localStorageService) {
    var orders = localStorageService.get('orders') || [];
    return {
        get: function(){
            return orders;
        },
        add: function(product){         
            orders.push(product);
        },
        remove: function(product){
            var index = orders.indexOf(product);
            orders.splice(index, 1);  
        },
        save: function(){
            localStorageService.set('orders', orders);
        },
        clear: function(){            
            localStorageService.clearAll('orders');
            orders = [];
        }
    }
});

myApp.service('Rounds', function($http, localStorageService) {
    var rounds = localStorageService.get('rounds') || [];
    return {
        get: function(){
            return rounds;
        },
        add: function(round){         
            rounds.push(round);
            localStorageService.set('rounds', rounds);
        },
        clear: function(){            
            localStorageService.clearAll('rounds');
            rounds = [];
        }
    }
});
