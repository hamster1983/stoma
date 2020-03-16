$(document).ready(function(){
	
	$('[name="phone"]').inputmask("+7(999) 999-9999");
	
	$('label[for="personal-data"]').click(function(){
		if(!$('#personal-data').is(':checked')) {
			$('.akcia-form [type="submit"]').prop('disabled', false).css('opacity',1);
		}
		else {
			$('.akcia-form [type="submit"]').prop('disabled', true).css('opacity',.5);
		}
	});
	
	//обратный отсчёт
	function getMyDate() {
		let nowDate = Date.now(); //текущая дата в timestamp
		let myDate = Date.parse(new Date(2020, 2, 25, 22, 20)); //нужная дата в timestamp
		let sec = Math.round((myDate - nowDate)/1000); //общее количество оставшихся секунд
		let days = parseInt(sec/86400); //количество дней
		let hours = parseInt(sec/3600)%24; //...часов
		let min = parseInt(sec/60)%60; //...минут
		sec = sec%60; //...секунд
		
		let timeArr = [days, hours, min, sec];
		let itemArr = ['days', 'hours', 'min', 'sec'];
		
		timeArr.forEach(function(item, i){
			if(item >= 10) {
				$('.counter-item.'+itemArr[i]).text(item);
			}
			else if(item < 10 && item >= 0) {
				$('.counter-item.'+itemArr[i]).text('0'+item);
			}
			else {
				$('.counter-item.'+itemArr[i]).text('00');
			}
		});	
	}
	setInterval(function() { getMyDate(); }, 1000);
	
});