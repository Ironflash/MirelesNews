angular.module('appDirectives', [])
	.directive('postItem', function(){
		return{
		    restrict: 'E',
		    scope: { post: '=' },
		    templateUrl: 'views/partials/post.html',
		};
	});
	