'use strict';

/**
 * @ngdoc function
 * @name sampleProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleProjectApp
 */
angular.module('sampleProjectApp')
        .controller('AboutCtrl', function ($scope) {
            $scope.itemPerPage = 5;
    // define the options which users can select the number of items to be displayed per page.
            $scope.typeOptions = [

                {name: '5', value: '5'},
                {name: '10', value: '10'},
                {name: '50', value: '50'},
                {name: '100', value: '100'}
            ];
            //let the dynamic api calls gives the video items to displayed as follows.
            $scope.Items = [
                {
                    "number": "1",
                    "videolink": "testVideo",
                    "location": "app/images/test1.png"
                },
                {
                    "number": "2",
                    "videolink": "testVideo2",
                    "location": "app/images/test2.png"
                },
                {
                    "number": "3",
                    "videolink": "testVideo3",
                    "location": "app/images/test3.png"
                },
                {
                    "number": "4",
                    "videolink": "testVideo4",
                    "location": "app/images/test4.png"
                },
                {
                    "number": "5",
                    "videolink": "testVideo5",
                    "location": "app/images/test5.png"
                },
                {
                    "number": "6",
                    "videolink": "testVideo6",
                    "location": "app/images/test6.png"
                },
                {
                    "number": "7",
                    "videolink": "testVideo7",
                    "location": "app/images/test7.png"
                },
                {
                    "number": "8",
                    "videolink": "testVideo8",
                    "location": "app/images/test8.png"
                },
                {
                    "number": "9",
                    "videolink": "testVideo9",
                    "location": "app/images/test9.png"
                },
                {
                    "number": "10",
                    "videolink": "testVideo10",
                    "location": "app/images/test10.png"
                },
                {
                    "number": "11",
                    "videolink": "testVideo11",
                    "location": "app/images/test11.png"
                }
            ];            
        });
