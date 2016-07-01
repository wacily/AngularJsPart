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