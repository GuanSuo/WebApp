(function(angular) {
  'use strict';
angular.module('lang', ['pascalprecht.translate'])
 .controller('Language', function ($scope, $translate) {
		$scope.changeLanguage = function (langkey) {
		$translate.use(langkey);
   };
   })
  .config(function ($translateProvider) {
	$translateProvider.translations('en', {
		SEARCH: 'Search',
		SEARCH_MY: 'Search in my files',
		SEARCH_SHARED: 'Search in the shared pool',
		SEARCH_SELECTED: 'Search for selected files',
		SEARCH_OPEN: 'Search for files with open access',
		FILLES: 'Files',
		PROFILE: 'Profile',
		SETTINGS: 'Administration',
		ENTER: 'Вход',
		REGISTRATION: 'Registration',
		LOGIN: 'Login',
		ENTER_LOGIN: 'enter login',
		PASSWORD: 'Password',
		ENTER_PASSWORD: 'enter password',
		FILLES_MANAGMENT: 'file management',
		ACCOUNT_MANAGMENT: 'account management',
		REGISTRATION_MANAGMENT: ' registration management',
		APPLICATION_FORM_MANAGMENT: 'application form management',
		NAME: 'Name',
		ENTER_NAME: 'enter name',
		SURNAME: 'Surname',
		ENTER_SURNAME: 'enter surname',
		SECOND_NAME: 'Second name',
		ENTER_SECOND_NAME: 'enter second name',
		EMAIL: 'Email',
		ENTER_EMAIL: 'enter email',
		INPUT_TEXT_FORM: 'content of  request',
		TEXT_FORM:'request',
		BUTTON:'Send',
		REMEMBER: 'Remember me',
		EXTENTION: 'Extention',
		TYPE: 'Type',
		SIZE: 'Size',
		CHANGE: 'changed'
		
	})
	$translateProvider.translations('ru', {
		SEARCH: 'Поиск',
		SEARCH_MY: 'Поиск в моих файлах',
		SEARCH_SHARED: 'Поиск в общем пуле',
		SEARCH_SELECTED: 'Поиск по избранным файлам',
		SEARCH_OPEN: 'Поиск по файлам с открытым доступом',
		FILLES: 'Файлы',
		PROFILE: 'Профиль',
		SETTINGS: 'Управление',
		ENTER: 'Вход',
		REGISTRATION: 'Регистрация',
		LOGIN: 'Логин',
		ENTER_LOGIN: 'введите логин',
		PASSWORD: 'Пароль',
		ENTER_PASSWORD: 'введите пароль',
		FILLES_MANAGMENT: 'управление файлами',
		ACCOUNT_MANAGMENT: 'управление учетными записями',
		REGISTRATION_MANAGMENT: 'управление приглашениями на регистрацию',
		APPLICATION_FORM_MANAGMENT: 'управление заявками',
		NAME: 'Имя',
		ENTER_NAME: 'введите имя',
		SURNAME: 'Фамилия',
		ENTER_SURNAME: 'введите фамилию',
		SECOND_NAME: 'Отчество',
		ENTER_SECOND_NAME: 'введите отчество',
		EMAIL: 'Электронная почта',
		ENTER_EMAIL: 'введите адрес электронной почты',
		INPUT_TEXT_FORM: 'содержание заявки',
		TEXT_FORM:'заявка',
		BUTTON:'Отправить',
		REMEMBER: 'Запомнить меня',
		EXTENTION: 'Расширение',
		TYPE: 'Тип',
		SIZE: 'Размер',
		CHANGE: 'Изменен'
		
	});
  
	$translateProvider.preferredLanguage('ru');
	});
	
   
	


})(window.angular);