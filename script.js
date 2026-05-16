/**
 * Оновлений скрипт для ефекту "Modal Image"
 * Працює з фоновими зображеннями (CSS background-image)
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Отримуємо елементи модального вікна
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // 2. Знаходимо всі блоки з класом .modal-trigger (наші порожні div-и)
    const triggers = document.querySelectorAll(".modal-trigger");
 
    // 3. Додаємо подію кліку для кожного блоку
    triggers.forEach(function(element) {
        element.onclick = function() {
            // Показуємо модальне вікно
            modal.style.display = "block";
            
            // Забороняємо прокрутку сторінки, поки вікно відкрите
            document.body.style.overflow = "hidden";

            // ДІСТАЄМО ФОТО З CSS:
            // Отримуємо значення background-image (воно виглядає як url("шлях_до_файлу"))
            let bgImage = window.getComputedStyle(this).backgroundImage;
            
            // Видаляємо зайве (слово url, дужки та лапки), щоб залишилося тільки чисте посилання
            let cleanUrl = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            
            // Вставляємо чисте посилання у модальне вікно
            modalImg.src = cleanUrl;

            // ДІСТАЄМО ПІДПИС:
            // Беремо текст із сусіднього елемента зверху (це наші <h3>Топ Протеїнів</h3> та <h3>Вітаміни</h3>)
            if(this.previousElementSibling && this.previousElementSibling.tagName === 'H3') {
                captionText.innerHTML = this.previousElementSibling.innerText;
            } else {
                captionText.innerHTML = ""; // Якщо заголовка немає, залишаємо порожнім
            }
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

    // Закриття при кліку на темне тло поза фотографією
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Закриття вікна клавішею Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });

});