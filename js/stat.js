'use strict';

var CLOUD_WIDTH = 420; /*Ширина облака*/
var CLOUD_HEIGHT = 270; /*Высота облака*/
var CLOUD_Y = 100; /*Отступ облока с лева*/
var CLOUD_X = 10; /*Отступ облока с верху*/
var BAR_MOVE = 10; /*Глубина тени*/
var BAR_COLOR = '#fff'; /*Цвет Облака*/
var BAR_SHADOW = 'rgba(0, 0, 0, 0.7)'; /*Цвет тени*/
var GIST_HEIGHT = 150; /*Высота Гистограммы*/
var GIST_WIDTH = 40; /*Ширина гистограммы*/
var GIST_DISTANCE = 50; /*Отступ между гистограммой*/
var RESULT_VALUE = 10;

var getMaxElement = function(arr) {
	var maxElement = arr[0];
	for(var i = 0;i < arr.length; i++) {
		if(arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	return maxElement;
};

window.renderStatistics = function(ctx, players, times){
	ctx.fillStyle = BAR_SHADOW;/*Отрисовка Облака*/
	ctx.fillRect((CLOUD_Y+BAR_MOVE),(CLOUD_X+BAR_MOVE),CLOUD_WIDTH, CLOUD_HEIGHT);

	ctx.fillStyle = BAR_COLOR; /*Цвет Облака*/
	ctx.fillRect(CLOUD_Y,CLOUD_X,CLOUD_WIDTH,CLOUD_HEIGHT);

	ctx.fillStyle = "#000";
    ctx.font = "16pt PT Mono";
    ctx.fillText("Ура вы победили!", 200, 30);
    ctx.fillText("Список результатов:", 180, 50);

   	var maxTime = getMaxElement(times);
    for (var i = 0; i < players.length; i++){
    	
        ctx.fillStyle = "#000";
    	ctx.font = "12pt PT Mono";
    	ctx.fillText( times[i].toFixed(0), CLOUD_Y+GIST_DISTANCE+(GIST_WIDTH+GIST_DISTANCE) * i,CLOUD_HEIGHT-GIST_WIDTH-((GIST_HEIGHT * times[i]) / maxTime)-RESULT_VALUE);
        //Генератор альфа канала
        var getRandomAlpha = Math.random().toFixed(1);
        var colorRGB = 'rgba(0, 0,  255,' + getRandomAlpha +' )';
        // Определение цвета гистограммы 'Вы' и Players
         if (players[i] == 'Вы') {
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        } else {
            ctx.fillStyle = colorRGB;
        }
    	//Отрисовка гистограммы
	    ctx.fillRect(CLOUD_Y+GIST_DISTANCE+(GIST_WIDTH+GIST_DISTANCE) * i, CLOUD_HEIGHT-GIST_WIDTH , GIST_WIDTH, -(GIST_HEIGHT * times[i]) / maxTime);
	    // Определение цвета 'Вы' и Players
	    if (players[i] == 'Вы') {
    		ctx.fillStyle = "rgba(255, 0, 0, 1)";
    	} else {
    		ctx.fillStyle = "#000";
    	}
    	//Отрисовка гистограммы 'Вы' и Players
	    ctx.font = "16pt PT Mono";
	    ctx.fillText(players[i], GIST_HEIGHT+(GIST_WIDTH+GIST_DISTANCE) * i, CLOUD_HEIGHT - (GIST_DISTANCE / 4));
    } ;
  };