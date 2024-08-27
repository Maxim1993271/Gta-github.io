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
