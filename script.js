// script.js

// Функция для обновления страницы
const refreshPage = () => {
    window.location.reload();
};

// Функция для показа кнопки "Наверх" и её обработчика
const setupScrollToTopButton = () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return; // Раннее завершение, если кнопка не найдена

    // Показ кнопки при прокрутке
    window.addEventListener('scroll', () => {
        scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
    });

    // Плавный скролл вверх при клике
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Функция для добавления обработчика клика к заголовку
const setupHeaderClick = () => {
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('click', refreshPage);
    }
};

// Инициализация функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    setupHeaderClick();
    setupScrollToTopButton();
});
<script>
        function openPopup() {
            window.open("https://example.com", "popupWindow", "width=600,height=400,scrollbars=yes");
        }
    </script>