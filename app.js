(function(angular) {
  'use strict';
angular.module('app', ['ngComponentRouter','lang', 'search', 'profile','files','admin','login','registration'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
  template: 
	'<nav class=" navbar navbar-inverse navbar-fixed-top" id="header"  role="navigation" >\n' +
		'<a class="navbar-brand" style="color:white" href="#" data-toggle="collapse" data-target="#Menu" aria-expanded="false" aria-controls="Menu">\n'+
			'Wisefox\n' +	
			'<span class="glyphicon glyphicon-align-justify"</span>\n' +
        '</a>\n' +
	'</nav>\n' +
			'<div class="collapse" id="Menu" >\n' +
				'<ul class="container" >\n'+
				'<li class="btn btn-primary" ng-link="[\'Search\']"><span class="glyphicon glyphicon-search"</span>Поиск</li>\n' +
				'<li class="btn btn-primary" ng-link="[\'Profile\']"><span class="glyphicon glyphicon-user"</span>Профиль</li>\n' +
				'<li class="btn btn-primary" ng-link="[\'Files\']"><span class="glyphicon glyphicon-file"</span>Файлы </li>\n' +
				'<li class="btn btn-primary" ng-link="[\'Admin\']"><span class="glyphicon glyphicon-cog"</span>Управление</li>\n' +
				'<li class="btn btn-primary" ng-link="[\'Login\']">Вход</li>\n' +
				'<li class="btn btn-primary" ng-link="[\'Registration\']">Регистрация</li>\n' +
				'</ul>\n'+
			'</div>\n' +	
	

    '<ng-outlet></ng-outlet>\n',

    
	controller: 'Language',
  $routeConfig: [
    {path: '/search/', name: 'Search', component: 'search', },
    {path: '/profile/', name: 'Profile', component: 'profile' },
	{path: '/files/', name: 'Files', component: 'files' },
	{path: '/admin/', name: 'Admin', component: 'admin' },
	{path: '/login/', name: 'Login', component: 'login' },
	{path: '/registration/', name: 'Registration', component: 'registration' },
				]
	});
})(window.angular);

