var app = angular.module("myApp",[]);

//指令1
app.directive('hello',function(){
	return {
		restrict:'E',
		template:'<H3>Hello Dircetive !</H3>',
		replace:true
	}
});

//指令2
app.directive('menu',function(){
	return {
		restrict:'E',
		templateUrl:'temp/menu.html',
		replace:true
	}
});

//指令3
app.directive('tran',function(){
	return {
		restrict:'E',
		template:'<p><span>Hi Me!</span><span ng-transclude></span></p>',
		transclude:true
	}
});

//指令4，需要controller配合
app.directive('hello2',function(){
	return {
		restrict:'E',
		template:'<span>Hi Mage：</span>',
		replace:true
	}
});


app.controller('FirstController',['$scope',function($scope){
	$scope.arr = [1,2,3,4,5,6];
}]);

//指令5
app.directive('hello3',function(){
	return {
		restirct:'EA',
		replace:true,
		transclude:true,
		scope:{
			title:'=mataTitle'
		},
		template:'<div>'
						+'<div class="title" ng-click="toggle()"><span ng-bind="title"></span></div>'
						+'<div class="body" ng-show="showMe" ng-transclude></div>'
						+'</div>',
		link:function(scope,element,attrs){
			scope.showMe = false;
			scope.title='Hello';
			scope.toggle = function(){
				scope.showMe = !scope.showMe;
			}
		}
	}
});

app.controller("secondController",['$scope',function($scope){
	$scope.title='点击展开';
	$scope.text = '这里是内部的内容。';
}]);

//指令6
app.directive('hello4',function(){
	return {
		restirct:'EA',
		replace:true,
		transclude:true,
		scope:{
			title:'@mataTitle'
		},
		template:'<div>'
						+'<div class="title" ng-click="toggle()"><span ng-bind="title"></span></div>'
						+'<div class="body" ng-show="showMe" ng-transclude></div>'
						+'</div>',
		link:function(scope,element,attrs){
			scope.showMe = false;
			scope.title='Hello';
			scope.toggle = function(){
				scope.showMe = !scope.showMe;
			}
		}
	}
});

app.controller("secondController",['$scope',function($scope){
	$scope.title='点击展开';
	$scope.text = '这里是内部的内容。';
}]);
