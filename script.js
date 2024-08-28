// Функция для обновления страницы
const refreshPage = () => {
    window.location.reload();
};

// Функция для показа кнопки "Наверх" и её обработчика
const setupScrollToTopButton = () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return; // Если кнопка не найдена, завершаем выполнение функции

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

// Функция для открытия всплывающего окна
const openPopup = () => {
    const url = "https://example.com";
    const name = "popupWindow";
    const features = "width=600,height=400,scrollbars=yes";

    try {
        // Открываем окно
        const popupWindow = window.open(url, name, features);

        // Проверяем, успешно ли открыто окно
        if (popupWindow && !popupWindow.closed && typeof popupWindow.closed !== 'undefined') {
            popupWindow.focus(); // Делаем окно активным
        } else {
            console.error("Не удалось открыть всплывающее окно. Проверьте настройки блокировки всплывающих окон.");
        }
    } catch (e) {
        console.error("Не удалось открыть всплывающее окно:", e.message);
    }
};

// Инициализация функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    setupHeaderClick();
    setupScrollToTopButton();

    // Добавление обработчика клика для кнопки открытия всплывающего окна
    const openPopupBtn = document.getElementById('openPopupBtn');
    if (openPopupBtn) {
        openPopupBtn.addEventListener('click', openPopup);
    }
});
