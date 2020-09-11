app.controller('HomeController', ['$scope', function($scope){
    $scope.greeting = 'Hello!';
    $scope.p1 = 'What are you going to do? Here is the your To Do List.';
    $scope.p2 = 'Or you can create a new one.';
    $scope.id = 1;

    $scope.list = [{
        id: $scope.id,
        name : 'Learn Angular JS',
        priority : 'Low',
        description : 'I have to learn Angular JS for developing AVBO',
        bg: 'success'
    }];
    let bg = 'success';

    $scope.add = () =>{
        $scope.id = $scope.id + 1;
        if($scope.priority == 'Low'){
            bg = 'success';
        }else if($scope.priority == 'Medium'){
            bg = 'warning';
        }else if($scope.priority == 'High'){
            bg = 'danger';
        }
        $scope.newtodo = {
            id: $scope.id,
            name: $scope.name,
            priority: $scope.priority,
            description: $scope.description,
            bg: bg
        };
        $scope.list.push($scope.newtodo);
    };
}]);