/**
 * Скрипт для реалізації ефекту "Modal Image"
 * Проект: PowerFuel (екзаменаційне завдання, Варіант 9)
 */

// Очікуємо повного завантаження DOM-структури
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Отримуємо елементи модального вікна з HTML
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // 2. Знаходимо всі зображення товарів, які мають клас .modal-trigger
    const images = document.querySelectorAll(".modal-trigger");

    // 3. Додаємо подію кліку для кожного знайденого зображення
    images.forEach(function(img) {
        img.onclick = function() {
            // Показуємо модальне вікно
            modal.style.display = "block";
            // Встановлюємо джерело картинки в модальному вікні таке ж, як у натиснутої
            modalImg.src = this.src;
            // Встановлюємо підпис із атрибута alt
            captionText.innerHTML = this.alt;
            
            // Забороняємо прокрутку сторінки, поки вікно відкрите
            document.body.style.overflow = "hidden";
        }
    });

    // 4. Функція для закриття вікна
    const closeModal = function() {
        modal.style.display = "none";
        // Повертаємо прокрутку сторінки
        document.body.style.overflow = "auto";
    };

    // Закриття при кліку на хрестик
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    // Закриття при кліку на темне тло поза зображенням
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Закриття при натисканні клавіші Escape (для зручності)
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });

});