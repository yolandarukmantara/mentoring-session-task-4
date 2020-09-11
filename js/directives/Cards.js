app.directive('cards', function(){
    return {
        restrict : 'E',
        scope : {
            list : '='
        },
        templateUrl: 'pages/card.html',
        link : function($scope,elem,attrs){
            $scope.delete = function(id) {
                $scope.list = $.grep($scope.list, function(e){ 
                    return e.id != id; 
               });
            };
        }
    };
});