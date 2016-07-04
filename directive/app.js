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

app.controller("threeController",['$scope',function($scope){
	$scope.title='点击展开';
	$scope.text = '这里是内部的内容。';
}]);

//指令7
app.directive('accordion',function(){
	return {
		restrict:'EA',
		replace:true,
		transclude:true,
		template:'<div ng-transclude></div>',
		controller:function(){
			var expanders = [];
			this.gotOpened = function(selectedExpander){
				angular.forEach(expanders,function(expander){
					if(selectedExpander != expander){
						expander.showMe = false;
					}
				});
			}
			
			this.addExpander = function(expander){
				expanders.push(expander)
			}
		}
	}
});

app.directive('expander',function(){
	return {
		restrict:'EA',
		replace:true,
		transclude:true,
		require:'^?accordion',
		scope:{
			title:'=expanderTitle'
		},
		template:'<div>'
						+'<div class="title" ng-click="toggle()">{{title}}</div>'
						+'<div class="body" ng-show="showMe" ng-transclude></div>'
						+'</div>',
		link:function(scope,element,attrs,accordionController){
			scope.showMe = false;
			accordionController.addExpander(scope);
			scope.toggle = function(){
				scope.showMe = !scope.showMe;
				accordionController.gotOpened(scope);
			}
		}
	}
});

app.controller('someController',['$scope',function($scope){
	$scope.expanders = [
		{
			title:'Click me to expand',
			text:'Hi trere folks,I am the content that was hidden but is now shown.'
		},
		{
			title:'Click this',
			text:'I am even better text than you have seen previously'
		},
		{
			title:'Test',
			text:'text'
		}
	];
}]);
