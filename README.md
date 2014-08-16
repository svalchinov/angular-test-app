
#### Simple pub app using AngularJS and local storage



##### Ideal/possible API routes 

| HTTP          | URL                                    		| Result                            |
| ------------- |:----------------------------------------------| ----------------------------------|
| GET           | /api/bars/     					     		| list of all bars                  |
| GET           | /api/bars/{bar_id}/products		     		| list of all products in a bar     |
| GET           | /api/bars/{bar_id}/rounds              		| list of rounds for a bar          |
| GET/POST      | /api/bars/{bar_id}/round/{round_id}    		| single round                      |
| GET           | /api/bars/{bar_id}/round/{round_id}/orders    | list of orders in a round         |


Prices will be inside products object thus possibly reducing the amount of API calls and complexity.

Orders will be posteds inside rounds from the front-end



[Demo](http://svalchinov.me/angular-test/)

