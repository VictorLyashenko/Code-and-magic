'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']; /*массив имен*/
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']; /*массив имен*/
var COLOR_MANT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']; /*массив цвета мантии*/
var EYES_CCOLOR = ['black', 'red', 'blue', 'yellow', 'green']; /*массив цвета глаз*/
var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];//цвет фаербола

//Генерация случайных персонажей
// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden'); /*активация окна персонажа*/
document.querySelector('.setup-similar').classList.remove('hidden'); /*отоброжение окна setup-similar*/

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


// Генератор случайного целого числа в зависимости от дленны входного массива
function randomInt(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.floor(rand);
    return rand;
  };
// Цыкл генирации персонажа
for (var k = 0; k < 4; k++) {
	var creteWizard = [{
						randomNames: (NAME[randomInt(0, NAME.length)])+ ' ' + (SURNAME[randomInt(0, SURNAME.length)]),/*случайное имя и фамиилия из массива*/
						randomColorMant: COLOR_MANT[randomInt(0, COLOR_MANT.length)],/*случайый цвет мантии из массива*/
						randomColorEyes: EYES_CCOLOR[randomInt(0, EYES_CCOLOR.length)] /*случайый цвет глаз из массива*/
					}];
	var wizardElement = similarWizardTemplate.cloneNode(true); /*копирование шаблона мага(глубокое копирование объекта)*/
	wizardElement.querySelector('.setup-similar-label').textContent = creteWizard[0].randomNames; /*присвоение случайного имени*/
	wizardElement.querySelector('.wizard-coat').style.fill = creteWizard[0].randomColorMant; /*присвоение случайного цвета мантии*/
	wizardElement.querySelector('.wizard-eyes').style.fill = creteWizard[0].randomColorEyes; /*присвоение случайного цвета глаз*/
	similarListElement.appendChild(wizardElement); /*Отрисовка модефицированного персонажа*/
}

//Обработчики
var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		closePopup();
	}
};

var openPopup = function(){
	setup.classList.remove('hidden'); //открыть Popup
	document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
	setup.classList.add('hidden') //закрыть Popup
	document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function(){/*активация окна персонажа*/
	openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
	openPopup();
	}
});

setupClose.addEventListener('click', function(){/*активация окна персонажа*/
	closePopup();
});

setupClose.addEventListener('keydown', function(evt){/*активация окна персонажа*/
	if (evt.keyCode === ENTER_KEYCODE) {
	closePopup();
	}
});

// Редактор Мага
var wizardСoat = document.querySelector('.wizard-coat');//цвет мантии
	wizardСoat.addEventListener('click', function(){
	document.querySelector('.wizard-coat').style.fill = COLOR_MANT[randomInt(0, COLOR_MANT.length)];
});

var wizardEye = document.querySelector('.wizard-eyes');//цвет глаз
	wizardEye.addEventListener('click', function(){
	document.querySelector('.wizard-eyes').style.fill = EYES_CCOLOR[randomInt(0, EYES_CCOLOR.length)];
});

var colorFireball = document.querySelector('.setup-fireball-wrap');//цвет фаербола
	colorFireball.addEventListener('click', function(){
	document.querySelector('.setup-fireball-wrap').style.background = COLOR_FIREBALL[randomInt(0, COLOR_FIREBALL.length)];
});





