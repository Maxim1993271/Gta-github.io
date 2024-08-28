// script.js

// Функция для обновления страницы
function refreshPage() {
    window.location.reload(); // Перезагружает текущую страницу
}

// Добавляем обработчик клика к заголовку
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header'); // Предполагается, что ваш заголовок находится в теге <header>
    if (header) {
        header.addEventListener('click', refreshPage);
    }
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Показываем кнопку после прокрутки на 300px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
