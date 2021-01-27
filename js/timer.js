// Timer

const timer = deadline => {
	const
		timerDays = document.getElementById('days'),
		timerHours = document.getElementById('hours'),
		timerMinutes = document.getElementById('minutes'),
		timerSeconds = document.getElementById('seconds');
		
	//Вычисляем время
	const getTimeRemaining = () => {
		const
			dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timerRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timerRemaining % 60),
			minutes = Math.floor((timerRemaining / 60) % 60),
			hours = Math.floor(timerRemaining / 60 / 60) % 24,
			days = Math.floor(timerRemaining / 60 / 60 / 24);

		return {
			days,
			hours,
			minutes,
			seconds,
			timerRemaining
		};
	};

	//Выводим на страницу
	const updateClock = () => {
		const timer = getTimeRemaining();


		if (timer.timerRemaining === 0 || timer.timerRemaining < 0) {
			clearInterval(1);
			timerDays.textContent = '00';
			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';
		} else {
			timerDays.textContent = timerDays < 10 ? `0${timer.days}` : timer.days;
			timerHours.textContent = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
			timerMinutes.textContent = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
			timerSeconds.textContent = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;
		}
	};
	updateClock();

	setInterval(updateClock, 1000);
};

export default timer;
