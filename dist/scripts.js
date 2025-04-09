"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Функция для отображения карточек
    function renderCards(data) {
        const container = document.getElementById('cards-container');
        if (!container) {
            console.error('Контейнер для карточек не найден');
            return;
        }
        // Очищаем контейнер перед добавлением новых карточек
        container.innerHTML = '';
        // Создаем карточки и добавляем их в контейнер
        data.forEach((item) => {
            const cardElement = `
        <div class="card">
          <h2>${item.name || 'Пользователь'}</h2>
          <p><strong>Email:</strong> ${item.email}</p>
          <p><strong>Комментарий:</strong> ${item.body}</p>
        </div>
      `;
            container.insertAdjacentHTML('beforeend', cardElement);
        });
    }
    // Выполнение запроса к API
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
        .then(response => response.json())
        .then((data) => {
        // Проверяем, что данные соответствуют интерфейсу
        if (Array.isArray(data)) {
            renderCards(data); // Отображаем полученные данные
        }
        else {
            console.error('Полученные данные не соответствуют ожидаемому формату');
        }
    })
        .catch(error => {
        console.error('Ошибка при получении данных:', error);
    });
});
//# sourceMappingURL=scripts.js.map