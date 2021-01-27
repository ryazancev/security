// Slider

const slider = () => {
	const
		slide = document.querySelectorAll('.slider'),
		sliderContainer = document.querySelector('.speakers__container');

	let currentSlide = 0; //Текущий слайд

	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	sliderContainer.addEventListener('click', event => {
		const target = event.target;
		event.preventDefault();

		if (!target.closest('.speakers__arrow')) return;

		prevSlide(slide, currentSlide, 'slider--active');

		if (target.closest('.speakers__arrow--next')) {
			currentSlide++;
		} else if (target.closest('.speakers__arrow--prev')) {
			currentSlide--;
		}

		if (currentSlide >= slide.length) currentSlide = 0;
		if (currentSlide < 0) currentSlide = slide.length - 1;

		nextSlide(slide, currentSlide, 'slider--active');
	});
};

export default slider;

