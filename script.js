// script.js

// Функция для обновления страницы
function refreshPage() {
    window.location.reload();
}

// Функция для показа кнопки "Наверх" и её обработчика
function setupScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Функция для добавления обработчика клика к заголовку
function setupHeaderClick() {
    const header = document.querySelector('header');

    if (header) {
        header.addEventListener('click', refreshPage);
    }
}

// Инициализация функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    setupHeaderClick();
    setupScrollToTopButton();
});
