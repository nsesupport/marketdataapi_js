<!DOCTYPE html>
<html>
<head>
    <title>Sample Site</title>
    <meta charset="utf-8" />
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
</head>
<body style="width: 100%; height: 100%;">
    <div ng-app="myApp" ng-controller="myCtrl" style="">
        <select style="font-size: large; font-weight: bold" ng-model="symbol" ng-change="fetch()">
            <option selected="selected" value="">- Select Company -</option>
            <option ng-repeat="sym in companies">{{sym}}</option>
        </select>
        <br />
        <hr />
        <p ng-show="connecting==true">Connecting to server...</p>
        <h1 ng-show="quote != null">Quote: #{{quote.Last}} @{{quote.LastTradeTime}}</h1>
    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope, $http) {
            $scope.companies = ['7UP', 'ADSWITCH', 'FBNH', 'ACCESS', 'CADBURY', 'FIDSON'];
            $scope.symbol = "";
            $scope.quote = null;
            $scope.connecting = false;

            $scope.fetch = function () {
                $scope.quote = null;
                $scope.connecting = true;
                var url = "http://marketdataapi.nse.com.ng/v1/odata/DelayedQuote('" + $scope.symbol + "')?_token=60832_your_token_539b";
                $http.get(url)
            .then(function (response) {
                $scope.quote = response.data;
                $scope.connecting = false;
            });
            };
        });
    </script>
</body>
</html>
