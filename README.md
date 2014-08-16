
#### Simple pub app using AngularJS and local storage

| HTTP          | URL                                    		| Result                            |
| ------------- |:----------------------------------------------| ----------------------------------|
| GET           | /api/bars/     					     		| list of all bars                  |
| GET           | /api/bars/{bar_id}/products		     		| list of all products in a bar     |
| GET           | /api/bars/{bar_id}/rounds              		| list of rounds for a bar          |
| GET/POST      | /api/bars/{bar_id}/round/{round_id}    		| single round                      |
| GET           | /api/bars/{bar_id}/round/{round_id}/orders    | list of orders in a round         |


Prices are inside products


Orders are inside rounds



[Demo](http://svalchinov.me/angular-test/)

