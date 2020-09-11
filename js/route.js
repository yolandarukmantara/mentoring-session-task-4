app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'pages/home.html',
        controller : 'HomeController'
    })
    .when('/about',{
        templateUrl : 'pages/about.html',
        controller : 'AboutController'
    })
    .otherwise({
        redirectTo : '/'
    })
})