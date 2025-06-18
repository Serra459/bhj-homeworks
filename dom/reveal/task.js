document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом reveal
    const reveals = document.querySelectorAll('.reveal');
    
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Функция для обработки появления элементов
    function handleScroll() {
        reveals.forEach(reveal => {
            if (isElementInViewport(reveal)) {
                reveal.classList.add('reveal_active');
            }
        });
    }
    
    // Проверяем элементы при загрузке страницы
    handleScroll();
    
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);
});