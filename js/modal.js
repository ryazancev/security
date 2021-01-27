// Modal

const modal = () => {
	const buttonOpen = document.querySelector('.reg__button')
	const modalWindow = document.querySelector('.modal')
	const buttonClose = document.querySelector('.modal__close')

	buttonOpen.addEventListener('click', function () {
		modalWindow.classList.remove('page-footer__modal--close')
		modalWindow.classList.add('page-footer__modal--open')
	})

	buttonClose.addEventListener('click', function () {
		modalWindow.classList.remove('page-footer__modal--open')
		modalWindow.classList.add('page-footer__modal--close')
	})
};

export default modal;
